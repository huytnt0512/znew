import { all } from "redux-saga/effects"
import { sagaLeft } from "../page/IndexPage/leftstore/sagas"
import { sagaMiddle } from "../page/IndexPage/middlestore/sagas"
import { sagaRight } from "../page/IndexPage/rightstore/sagas"
import { sagaBook } from "../page/CategoryPage/bookstore/sagas"
import { sagaLogin } from "../page/LoginPage/loginstore/sagas"
// import * as studentsSagas from "../Pages/MyClass/stores/";
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        // student
        sagaLeft(),
        sagaMiddle(),
        sagaRight(),
        sagaBook(),
        sagaLogin()
    ]);
}