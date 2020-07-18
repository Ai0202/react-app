import { call, put, takeLatest, takeEvery, fork } from "redux-saga/effects"
import { getMembers as fetchMembers, postMember as postNewMember } from "../services/Firebase"
import { 
  getMembersSuccess, 
  postMemberSuccess, 
  postMemberFail,
  deleteMemberSuccess,
  deleteMemberFail,
  POST_MEMBER_REQUEST, 
  GET_MEMBERS_REQUEST,
  DELETE_MEMBER_REQUEST } from "../redux/modules/member"

function* getMembers() {
  try {
    // firebaseからデータ取得
    const members = yield call(fetchMembers)
    
    // actionを実行
    yield put(getMembersSuccess(members))
  } catch (e) {
    console.log("error")
  }
}

// watchCreateMemberのPOST_MEMBER_REQUESTの返り値がpayload
function* postMember({ payload }: any) {
  try {
    const { name, description, number, image } = payload
    
    // TODO storageとdb保存分けたかったけど、できず1つの関数にまとめたため、いずれ修正
    // const uploadedFileName = yield call(postFile, image)
    
    // firebaseにpost
    const res = yield call(postNewMember, {
      name,
      description,
      number,
      image,
    })
    
    // actionを実行
    yield put(postMemberSuccess({ success: res }))

  } catch (e) {
    console.log(e)
    
    yield put(postMemberFail())
  }
}

function* deleteMember({ payload }: any) {
  try {
    // firestoreの内容削除
    console.log('firebaseに通信')
    
    // storageの内容削除

    // 削除後のデータ
    const members = yield call(fetchMembers)

    yield put(deleteMemberSuccess({ members }))
  } catch (e) {
    yield put(deleteMemberFail())
  }
}

function* watchGetMembers() {
  // actionを実行してから、getMembersを実行
  yield takeEvery(GET_MEMBERS_REQUEST, getMembers)
}

function* watchCreateMember() {
  yield takeLatest(POST_MEMBER_REQUEST, postMember)
}

function* watchDeleteMember() {
  yield takeLatest(DELETE_MEMBER_REQUEST, deleteMember)
}

export const userSagas = [
  fork(watchGetMembers),
  fork(watchCreateMember),
  fork(watchDeleteMember)
]