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
const firebaseStorage = firebaseApp.storage()

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

export const getMemberDetail = async (id: string) => {
  let member: any

  await firestore.collection("members").doc(id)
    .get()
    .then(res => {
      member = {id: res.id, ...res.data()}
    })

  return member
}

export const updateMember = async(member: Member) => {
  const { id, name, number, description } = member
  
  // TODO 画像の更新方法を検討
  firestore.collection("members").doc(id)
    .update({
      name,
      number,
      description
    })
}

// TODO 画像を保存したpathを呼び出し元に返すやり方わからず未使用
export const postFile = async (image: File | undefined) => {

  if (image === undefined) {
    return "members/default.jpg"
  }

  const fileName = `members/${uuidv4()}`
  const storageRef = firebaseStorage.ref()
  const uploadTask = storageRef.child(fileName).put(image)

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
      console.log(`error: ${error}`)
    }, () => {
    }
  )

  return fileName;
}

// TODO 画像投稿処理修正
  // - 画像投稿を関数に切り出し
export const postMember = async (member: Member) => {
  const { name, description, number, image } = member

  let fileName = "members/default.jpg"
  const storageRef = firebaseStorage.ref()

  // 画像投稿なしの場合
  if (image === undefined) {
    storageRef.child(fileName).getDownloadURL()
      .then(imagePath => {
        firestore.collection("members").doc(String(number)).set({
          name,
          description,
          number,
          imagePath,
          fileName
        })
      })

    return true
  }

  // 画像投稿ありの場合
  fileName = `members/${uuidv4()}`
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
      console.log(`error: ${error}`)
    }, () => {
      storageRef.child(fileName).getDownloadURL()
        .then(imagePath => {
          firestore.collection("members").doc(String(number)).set({
            name,
            description,
            number,
            imagePath,
            fileName
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

export const deleteMember = async (member: Member) => {
  // TODO transaction
  firestore.collection("members").doc(member.id).delete().then(() => {
    firebaseStorage.ref().child(member.fileName).delete()
  }).catch((e) => {
    console.log(e);
  })
}

export default firebase