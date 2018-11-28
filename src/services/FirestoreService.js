import firebase from 'react-native-firebase';

export default class FirestoreService {
  static firestore = firebase.firestore();

  static getCollection(collection) {
    return FirestoreService.firestore.collection(collection)
      .get()
      .then(querySnapshot => {
        if(querySnapshot.empty) return null
        
        const docs = {}
        querySnapshot.docs.forEach((doc) => {
          docs[doc.id] = doc.data()
        })
        return docs
      })
  }

  static getDocument(collection, document) {
    return FirestoreService.firestore.collection(collection).doc(document)
      .get()
      .then(documentSnapshot => documentSnapshot.exists ? documentSnapshot.data() : null)
  }
}
