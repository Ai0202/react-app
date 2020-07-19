import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import { v4 as uuidv4 } from "uuid"


import { firebaseApiKey, firebaseProjectId } from "../config/index"
import { Member } from "../redux/modules/member"

const config = {
  apiKey: firebaseApiKey,
  authDomain: `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectId}.firebaseio.com`,
  projectId: firebaseProjectId,
  storageBucket: `${firebaseProjectId}.appspot.com`,
}

const firebaseApp = firebase.initializeApp(config)
export const firestore = firebaseApp.firestore()
export const firebaseAuth = firebaseApp.auth()

export const getMembers = async () => {
  const members: any[] = []
  await firestore.collection("members")
    .get()
    .then(res => {
      res.forEach(member => {
        members.push({ id: member.id, ...member.data() })
      })
    })
  
  return members
}

// TODO 画像を保存したpathを呼び出し元に返すやり方わからず未使用
export const postFile = (file: File) => {
  const fileName = `members/${uuidv4()}`

  const storage = firebaseApp.storage()
  const storageRef = storage.ref()
  const uploadTask = storageRef.child(fileName).put(file)

  let filePath: any
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
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
    }, () => {
      // Upload completed successfully, now we can get the download URL
      filePath = uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => downloadURL)
      return filePath
    }
  )
}

export const postMember = async (member: Member) => {

  const { name, description, number, image } = member
  const fileName = `members/${uuidv4()}`

  const storage = firebaseApp.storage()
  const storageRef = storage.ref()
  const uploadTask = storageRef.child(fileName).put(image as File)

  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
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
    }, () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
        firestore.collection("members")
          .add({
            name,
            description,
            number,
            image: downloadURL,
          })
      })
    }
  )

  // TODO 非同期のためエラーが出てもtrueがかえる
  return true
}

export const declarationOfWar = async (opponent: any) => {
  // sleep処理
  // const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  // await _sleep(2000);
  
  const { name, email, tel, detail } = opponent
  return firestore.collection("opponents")
    .add({
      name,
      email,
      tel,
      detail,
    })
}

export const deleteMember = async (id: string) => {
  // transaction


  // 画像の削除
  // 画像の参照

  // 画像の削除

  // promise

  firestore.collection("members").doc(id).delete().then(() => {

  }).catch((e) => {
  })
}

export default firebase