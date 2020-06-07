import { call, put, takeLatest, takeEvery, fork } from "redux-saga/effects"
import { getMembers as fetchMembers } from "../services/Firebase"
import { getMembersSuccess, POST_MEMBER_REQUEST, GET_MEMBERS_REQUEST } from "../redux/modules/member"

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

function* postMember() {
  // firebaseへの登録処理
  try {
    console.log("実行")
    
    // firebaseにpost

    // actionを実行

  } catch (e) {
    console.log("error");
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