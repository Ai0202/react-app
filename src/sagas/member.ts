import { call, select, put, takeLatest } from 'redux-saga/effects'
import { getMembers as fetchMembers } from "../services/Firebase";
import { getMembersSuccess } from "../redux/modules/member";

export function* getMembers() {
  try {
    // firebaseからデータ取得
    const members = yield call(fetchMembers);

    // actionを実行
    yield put(getMembersSuccess(members));
  } catch (e) {
    console.log('error');
  }
}