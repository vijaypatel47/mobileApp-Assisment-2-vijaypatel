import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC7qtI1Cxt37jvayibw_zr5BRvdkTwEvbU',
  authDomain: 'login-app-ff698.firebaseapp.com',
  projectId: 'login-app-ff698',
  storageBucket: 'login-app-ff698.appspot.com',
  messagingSenderId: '978199279520',
  appId: '1:978199279520:web:140d9a8b41e78bb72156c5',
  databaseURL: 'https://login-app-ff698-default-rtdb.firebaseio.com',
}

const app = initializeApp(firebaseConfig)
export default app
