import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllRightAction, saveNewRightAction, saveUpdateRightAction, saveDetailRightAction, saveMultipleRightAction, saveFilterRightAction } from "./action"

import { GET_ALL_RIGHT, CREATE_RIGHT, UPDATE_RIGHT, DELETE_RIGHT, GET_DETAIL_RIGHT, GET_MULTIPLE_RIGHT, GET_FILTER_RIGHT } from "./constants"
import { getListRightService, createRightService, updateRightService, deleteRightService, getDetailRightService, getMultipleDetailRightService, getFilterRightService } from "../../../api/rightapi/index"


//------------------GET FILTER RIGHT-----------------------
function* fetchFilterRightSaga() {
    console.log('jump into saga')
    try {
        const response = yield call(getFilterRightService)
        console.log(response)
        yield put(saveFilterRightAction(response.data))
    } catch (error) {
        console.log("error")
    }
}

//------------------GET ALL RIGHT-----------------------
// function* fetchRightSaga() {
//     try {
//         const response = yield call(getListRightService)
//         yield put(saveAllRightAction(response.data))

//     } catch (error) {
//         console.log("error")
//     }
// }

function* fetchRightSaga({ payload, resolve }) {
    try {
        const response = yield call(getListRightService)
        resolve(response.status)
        yield put(saveAllRightAction(response.data))

    } catch (error) {
        resolve(null);
    }
}

//------------------CREATE RIGHT-----------------------
function* createRightSaga({ payload, resolve }) {
    try {
        console.log('enter saga')
        const response = yield call(createRightService, payload)
        resolve(response.status)
        yield put(saveNewRightAction(response.data))
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------UPDATE RIGHT-----------------------
function* updateRightSaga({ payload, resolve }) {
    try {
        const response = yield call(updateRightService, payload)
        resolve(response.status)
        yield put(saveUpdateRightAction(response.data))

    } catch (error) {
        resolve(null);
    }
}

//------------------DELETE RIGHT-----------------------
function* deleteRightSaga({ payload, resolve }) {
    try {
        const response = yield call(deleteRightService, payload)
        resolve(response.status)
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------GET RIGHT DETAIL-----------------------
function* getDetailRightSaga({ payload, resolve }) {
    try {
        const response = yield call(getDetailRightService, payload)
        resolve(response)
        yield put(saveDetailRightAction(response.data))
    } catch (error) {
        resolve(null);
    }
}

//------------------GET MULTIPLE RIGHT-----------------------
function* fetchMultipleRightSaga({ payload }) {
    try {
        const response = yield call(getMultipleDetailRightService, payload)
        yield put(saveMultipleRightAction(response))
    } catch (error) {
        console.log("error")
    }
}


export function* sagaRight() {
    yield takeLatest(GET_ALL_RIGHT, fetchRightSaga)
    yield takeLatest(CREATE_RIGHT, createRightSaga)
    yield takeLatest(UPDATE_RIGHT, updateRightSaga)
    yield takeLatest(DELETE_RIGHT, deleteRightSaga)
    yield takeLatest(GET_DETAIL_RIGHT, getDetailRightSaga)

    yield takeLatest(GET_MULTIPLE_RIGHT, fetchMultipleRightSaga)

    yield takeLatest(GET_FILTER_RIGHT, fetchFilterRightSaga)
}
