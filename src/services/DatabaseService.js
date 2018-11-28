import firebase from 'react-native-firebase';

export default class DatabaseService {
  static database = firebase.database();

  static getDatabase() {
    return DatabaseService.database
      .ref()
      .once('value')
      .then(snapshot => snapshot.val());
  }
}
