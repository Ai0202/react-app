import { call, select, put, takeLatest } from 'redux-saga/effects'
import { getMembers as fetchMembers } from "../services/Firebase";
import { getMembersSuccess } from "../redux/modules/member";

export function* getMembers() {
  try {
    const members = [
      {
        name: '******',
        description: '***********************',
        number: 0,
        image: '/images/default.png',
      },
      {
        name: 'テスト',
        description: 'テストテストテスト',
        number: 2,
        image: '/images/default.png',
      }
    ];

    // firebaseからデータ取得
    // const members = yield call(fetchMembers);

    // actionを実行
    yield put(getMembersSuccess(members));
  } catch (e) {
    console.log('error');
  }
}