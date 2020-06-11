import { call, put, takeLatest, takeEvery, fork } from "redux-saga/effects"
import { getMembers as fetchMembers, postMember as postNewMember, postFile } from "../services/Firebase"
import { 
  getMembersSuccess, 
  postMemberSuccess, 
  postMemberRequest,
  postMemberFail, 
  POST_MEMBER_REQUEST, 
  GET_MEMBERS_REQUEST,
  Member } from "../redux/modules/member"

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
    
    const uploadedFileName = yield call(postFile, image)
    
    // firebaseにpost
    const res = yield call(postNewMember, {
      name,
      description,
      number,
      image: uploadedFileName,
    })

    // actionを実行
    yield put(postMemberSuccess({ success: res }))

  } catch (e) {
    console.log(e)
    
    yield put(postMemberFail())
  }
}

function* watchGetMembers() {
  // actionを実行してから、getMembersを実行
  yield takeEvery(GET_MEMBERS_REQUEST, getMembers)
}

function* watchCreateMember() {
  yield takeLatest(POST_MEMBER_REQUEST, postMember)
}

export const userSagas = [
  fork(watchGetMembers),
  fork(watchCreateMember)
]