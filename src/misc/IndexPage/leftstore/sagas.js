import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllLeftAction, saveNewLeftAction, saveUpdateLeftAction, saveDetailLeftAction, saveMultipleLeftAction } from "./action"

import { GET_ALL_LEFT, CREATE_LEFT, UPDATE_LEFT, DELETE_LEFT, GET_DETAIL_LEFT, GET_MULTIPLE_LEFT } from "./constants"
import { getListLeftService, createLeftService, updateLeftService, deleteLeftService, getDetailLeftService, getMultipleDetailLeftService } from "../../../api/leftapi/index"


function* fetchMultipleLeftSaga({ payload }) {
    try {
        const response = yield call(getMultipleDetailLeftService, payload)
        yield put(saveMultipleLeftAction(response))
    } catch (error) {
        console.log("error")
    }
}

//------------------GET ALL LEFT-----------------------
function* fetchLeftSaga() {
    try {
        const response = yield call(getListLeftService)
        console.log("ahihi")
        yield put(saveAllLeftAction(response.data))
        console.log(response)

    } catch (error) {
        console.log("error")
    }
}

//------------------CREATE LEFT-----------------------
function* createLeftSaga({ payload, resolve }) {
    try {
        const response = yield call(createLeftService, payload)
        resolve(response.status)
        yield put(saveNewLeftAction(response.data))
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------UPDATE LEFT-----------------------
function* updateLeftSaga({ payload, resolve }) {
    try {
        const response = yield call(updateLeftService, payload)
        resolve(response.status)
        yield put(saveUpdateLeftAction(response.data))
        console.log(response)

    } catch (error) {
        resolve(null);
    }
}

//------------------DELETE LEFT-----------------------
function* deleteLeftSaga({ payload, resolve }) {
    try {
        const response = yield call(deleteLeftService, payload)
        resolve(response.status)
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------GET LEFT DETAIL-----------------------
function* getDetailLeftSaga({ payload, resolve }) {
    try {
        const response = yield call(getDetailLeftService, payload)
        resolve(response)
        yield put(saveDetailLeftAction(response.data))
    } catch (error) {
        resolve(null);
    }
}

export function* sagaLeft() {
    yield takeLatest(GET_ALL_LEFT, fetchLeftSaga)
    yield takeLatest(CREATE_LEFT, createLeftSaga)
    yield takeLatest(UPDATE_LEFT, updateLeftSaga)
    yield takeLatest(DELETE_LEFT, deleteLeftSaga)
    yield takeLatest(GET_DETAIL_LEFT, getDetailLeftSaga)

    yield takeLatest(GET_MULTIPLE_LEFT, fetchMultipleLeftSaga)
}
