import { FirebaseError } from "firebase/app";
import { collection, doc, updateDoc} from "firebase/firestore";

export const firestoreUpdateDocument = async (collectionName , documentID , data) => {

  try {
     const documentRef = doc(db , collectionName , documentID );

     await updateDoc(documentRef , data) ;
     return { data };

  } catch (error)  {
    const firebaseError = error  ;

    return {
        error : {
            code : firebaseError.code,
            message: firebaseError.message
        },
    };
  }




}