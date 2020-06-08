import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import { firebaseApiKey, firebaseProjectId } from "../config/index"
import { Member } from "../redux/modules/member";

const config = {
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectId}.firebaseio.com`,
  projectId: firebaseProjectId,
  storageBucket: `${firebaseProjectId}.appspot.com`,
}

const firebaseApp = firebase.initializeApp(config)
export const firestore = firebaseApp.firestore()

export const getMembers = async () => {
  const members: any[] = []
  await firestore.collection("members")
    .get()
    .then(res => {
      res.forEach(member => {
        members.push(member.data())
      })
    })
  
  return members
}

export const postMember = async (member: Member) => {
  const { name, description, number, image } = member
  // await firestore.collection("members").doc(String(number))
  await firestore.collection("members")
    .add({
      name,
      description,
      number,
      image
    })

  return true
}