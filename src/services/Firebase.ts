import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { v4 as uuidv4 } from "uuid"


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

// filepathを保存する
export const postFile = async (file: File) => {
  const fileName = `members/${uuidv4()}`

  const storage = firebaseApp.storage()
  const storageRef = storage.ref()
  const uploadTask = storageRef.child(fileName).put(file)

  let filePath: any
  await uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log('Upload is ' + progress + '% done')
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused')
          break
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running')
          break
      }
    }, (error) => {
      // TODO エラー
      console.log('error')
    }, async () => {
      // Upload completed successfully, now we can get the download URL
      filePath = await uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => downloadURL)
      
      return filePath
    }
  )
  
  return fileName
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