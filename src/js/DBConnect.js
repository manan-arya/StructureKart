// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
import config from "./config";

var configureDB = () => {
	const firebaseApp = initializeApp({
		apiKey: config.apiKey,
		authDomain: config.authDomain,
		projectId: config.projectId
	  });


	  const db = getFirestore(firebaseApp);
	  return db;
}

var Push = async function PushDoc(db, param){
	try {
		const collections = collection(db, "users");
		const docRef = await addDoc(collections, {
		  email: param.email,
		  timestamp: new Date().toLocaleString()
		});
		console.log("Document written with ID: ", docRef.id);
	  } catch (e) {
		console.error("Error adding document: ", e);
	  }
}

export {Push, configureDB};