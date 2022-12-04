import { takeLatest, call } from "redux-saga/effects"

import { CHECK_USER } from "./constants"
import { checkUserService } from "../../../api/loginapi/index"


//------------------CREATE BOOK-----------------------
function* checkUserSaga({ payload, resolve }) {
    try {
        const response = yield call(checkUserService, payload)
        resolve(response)
    } catch (error) {
        resolve(null);
    }
}

export function* sagaLogin() {
    yield takeLatest(CHECK_USER, checkUserSaga)
}
