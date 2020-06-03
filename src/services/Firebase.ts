import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

import { firebaseApiKey, firebaseProjectId } from "../config/index";

const config = {
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectId}.firebaseio.com`,
  projectId: firebaseProjectId,
  storageBucket: `${firebaseProjectId}.appspot.com`,
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();

export const getMembers = () => {
  const members: any[] = [];
  firestore.collection('members')
    .get()
    .then(res => {
      res.forEach(member => {
        members.push(member.data());
      })
    });
  
  return members;
}