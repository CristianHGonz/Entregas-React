import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc, runTransaction } from "firebase/firestore";
import { app } from "./config";


const db = getFirestore(app);

export const getAccesorios = async (categorias, setGetProducts) => {

    const accesorios = []
    if (!categorias) {

        const querySnapshot = await getDocs(collection(db, "accesorios"));
        querySnapshot.forEach((doc) => {
            accesorios.push({ ...doc.data(), id: doc.id })
        });

    } else {
        const q = query(collection(db, "accesorios"), where("categoria", "==", categorias));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            accesorios.push({ ...doc.data(), id: doc.id })
        });
    }
    setGetProducts(accesorios)


}
export const getCategorias = async () => {
    const querySnapshot = await getDocs(collection(db, "categorias"));
    const categorias = []
    querySnapshot.forEach((doc) => {
        categorias.push(doc.data().nombre)
    });
    return categorias
}

export const obtenerAccesorio = async (id) => {

    const docRef = doc(db, "accesorios", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        return { ...docSnap.data(), id: docSnap.id }
    }


}

export const ordenCompra = async (orden) => {

    try {
        const docRef = await addDoc(collection(db, "compra"), orden
        );

        return docRef.id


    } catch (e) {
        console.error(e);
    }
}

export async function validarStock(id, cantidad) {
    const sfDocRef = doc(db, "accesorios", id);

    const sfDoc = await getDoc(sfDocRef);

    if (!sfDoc.exists()) {
        throw new Error("El producto no existe");
    }

    const stockActual = sfDoc.data().stock;

    if (stockActual < cantidad) {
        throw new Error("No hay suficiente stock disponible del producto " + sfDoc.data().nombre);
    }

    return true;
}
export async function descontarProducto(id, cantidad) {
    const sfDocRef = doc(db, "accesorios", id);

    await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);

        if (!sfDoc.exists()) {
            throw new Error("El producto no existe");
        }

        const stockActual = sfDoc.data().stock;

        if (stockActual < cantidad) {
            throw new Error("No hay suficiente stock disponible");
        }

        transaction.update(sfDocRef, {
            stock: stockActual - cantidad,
        });
    });
}