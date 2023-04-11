import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getBlob, getMetadata, getStorage, ref } from "firebase/storage";

const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey,
	authDomain,
	projectId,
	storageBucket,
	messagingSenderId,
	appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

//getPacientData

export const getPacientData = async (id) => {
	const pacientRef = doc(db, "pacientes", id);
	const pacientData = await getDoc(pacientRef);
	return pacientData;
};

//getImagesBlob

export const getBlobsFromExpedient = async (expediente) => {
	let tempImagenes;
	let tempDocs;

	if (expediente.imagenes.length > 0) {
	}
	tempImagenes = await Promise.all(
		expediente.imagenes.map(async (img) => {
			const httpsReference = ref(storage, img);
			const blob = await getBlob(httpsReference);
			const metadata = await getMetadata(httpsReference);
			return { blob, metadata };
		})
	);

	if (expediente.docs.length > 0) {
	}
	tempDocs = await Promise.all(
		expediente.docs.map(async (doc) => {
			const httpsReference = ref(storage, doc);
			const blob = await getBlob(httpsReference);
			const metadata = await getMetadata(httpsReference);
			return { blob, metadata };
		})
	);

	return [...tempImagenes, ...tempDocs];
};
