import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllMiddleAction, saveNewMiddleAction, saveUpdateMiddleAction, saveDetailMiddleAction, saveMultipleMiddleAction } from "./action"

import { GET_ALL_MIDDLE, CREATE_MIDDLE, UPDATE_MIDDLE, DELETE_MIDDLE, GET_DETAIL_MIDDLE, GET_MULTIPLE_MIDDLE } from "./constants"
import { getListMiddleService, createMiddleService, updateMiddleService, deleteMiddleService, getDetailMiddleService, getMultipleDetailMiddleService } from "../../../api/middleapi/index"


function* fetchMultipleMiddleSaga({ payload }) {
    try {
        const response = yield call(getMultipleDetailMiddleService, payload)
        yield put(saveMultipleMiddleAction(response))
    } catch (error) {
        console.log("error")
    }
}

//------------------GET ALL MIDDLE-----------------------
function* fetchMiddleSaga() {
    try {
        const response = yield call(getListMiddleService)
        console.log("ahihi")
        yield put(saveAllMiddleAction(response.data))
        console.log(response)

    } catch (error) {
        console.log("error")
    }
}

//------------------CREATE MIDDLE-----------------------
function* createMiddleSaga({ payload, resolve }) {
    try {
        const response = yield call(createMiddleService, payload)
        resolve(response.status)
        yield put(saveNewMiddleAction(response.data))
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------UPDATE MIDDLE-----------------------
function* updateMiddleSaga({ payload, resolve }) {
    try {
        const response = yield call(updateMiddleService, payload)
        resolve(response.status)
        yield put(saveUpdateMiddleAction(response.data))
        console.log(response)

    } catch (error) {
        resolve(null);
    }
}

//------------------DELETE MIDDLE-----------------------
function* deleteMiddleSaga({ payload, resolve }) {
    try {
        const response = yield call(deleteMiddleService, payload)
        resolve(response.status)
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------GET MIDDLE DETAIL-----------------------
function* getDetailMiddleSaga({ payload, resolve }) {
    try {
        const response = yield call(getDetailMiddleService, payload)
        resolve(response)
        yield put(saveDetailMiddleAction(response.data))
    } catch (error) {
        resolve(null);
    }
}

export function* sagaMiddle() {
    yield takeLatest(GET_ALL_MIDDLE, fetchMiddleSaga)
    yield takeLatest(CREATE_MIDDLE, createMiddleSaga)
    yield takeLatest(UPDATE_MIDDLE, updateMiddleSaga)
    yield takeLatest(DELETE_MIDDLE, deleteMiddleSaga)
    yield takeLatest(GET_DETAIL_MIDDLE, getDetailMiddleSaga)

    yield takeLatest(GET_MULTIPLE_MIDDLE, fetchMultipleMiddleSaga)
}
