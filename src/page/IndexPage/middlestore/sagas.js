import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllMiddleAction, saveNewMiddleAction, saveUpdateMiddleAction, saveDetailMiddleAction, saveMultipleMiddleAction, saveFilterMiddleAction } from "./action"

import { GET_ALL_MIDDLE, CREATE_MIDDLE, UPDATE_MIDDLE, DELETE_MIDDLE, GET_DETAIL_MIDDLE, GET_MULTIPLE_MIDDLE, GET_FILTER_MIDDLE } from "./constants"
import { getListMiddleService, createMiddleService, updateMiddleService, deleteMiddleService, getDetailMiddleService, getMultipleDetailMiddleService, getFilterMiddleService } from "../../../api/middleapi/index"


//------------------GET FILTER MIDDLE-----------------------
function* fetchFilterMiddleSaga() {
    console.log('jump into saga')
    try {
        const response = yield call(getFilterMiddleService)
        console.log(response)
        yield put(saveFilterMiddleAction(response.data))
    } catch (error) {
        console.log("error")
    }
}

//------------------GET ALL MIDDLE-----------------------
// function* fetchMiddleSaga() {
//     try {
//         const response = yield call(getListMiddleService)
//         yield put(saveAllMiddleAction(response.data))

//     } catch (error) {
//         console.log("error")
//     }
// }

function* fetchMiddleSaga({ payload, resolve }) {
    try {
        const response = yield call(getListMiddleService)
        resolve(response.status)
        yield put(saveAllMiddleAction(response.data))

    } catch (error) {
        resolve(null);
    }
}

//------------------CREATE MIDDLE-----------------------
function* createMiddleSaga({ payload, resolve }) {
    try {
        console.log('enter saga')
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

//------------------GET MULTIPLE MIDDLE-----------------------
function* fetchMultipleMiddleSaga({ payload }) {
    try {
        const response = yield call(getMultipleDetailMiddleService, payload)
        yield put(saveMultipleMiddleAction(response))
    } catch (error) {
        console.log("error")
    }
}


export function* sagaMiddle() {
    yield takeLatest(GET_ALL_MIDDLE, fetchMiddleSaga)
    yield takeLatest(CREATE_MIDDLE, createMiddleSaga)
    yield takeLatest(UPDATE_MIDDLE, updateMiddleSaga)
    yield takeLatest(DELETE_MIDDLE, deleteMiddleSaga)
    yield takeLatest(GET_DETAIL_MIDDLE, getDetailMiddleSaga)

    yield takeLatest(GET_MULTIPLE_MIDDLE, fetchMultipleMiddleSaga)

    yield takeLatest(GET_FILTER_MIDDLE, fetchFilterMiddleSaga)
}
