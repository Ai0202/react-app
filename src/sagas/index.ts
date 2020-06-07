import { all } from "redux-saga/effects"
import { userSagas } from "./member"

export default function* rootSaga() {
  yield all([
    ...userSagas,
  ])
}