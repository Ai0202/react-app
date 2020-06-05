import { all } from "redux-saga/effects"
import { getMembers } from "./member"

export default function* rootSaga() {
  yield all([
    getMembers(),
  ])
}