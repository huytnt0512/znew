import { takeLatest, put, call } from "redux-saga/effects"

import { saveAllBookAction, saveNewBookAction, saveUpdateBookAction, saveDetailBookAction, saveMultipleBookAction, saveFilterBookAction } from "./action"

import { GET_ALL_BOOK, CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK, GET_DETAIL_BOOK, GET_MULTIPLE_BOOK, GET_FILTER_BOOK } from "./constants"
import { getListBookService, createBookService, updateBookService, deleteBookService, getDetailBookService, getMultipleDetailBookService, getFilterBookService } from "../../../api/bookapi/index"


//------------------GET FILTER BOOK-----------------------
function* fetchFilterBookSaga() {
    console.log('jump into saga')
    try {
        const response = yield call(getFilterBookService)
        console.log(response)
        yield put(saveFilterBookAction(response.data))
    } catch (error) {
        console.log("error")
    }
}

//------------------GET ALL BOOK-----------------------
// function* fetchBookSaga() {
//     try {
//         const response = yield call(getListBookService)
//         yield put(saveAllBookAction(response.data))

//     } catch (error) {
//         console.log("error")
//     }
// }

function* fetchBookSaga({ payload, resolve }) {
    try {
        const response = yield call(getListBookService)
        resolve(response.status)
        yield put(saveAllBookAction(response.data))

    } catch (error) {
        resolve(null);
    }
}

//------------------CREATE BOOK-----------------------
function* createBookSaga({ payload, resolve }) {
    try {
        console.log('enter saga')
        const response = yield call(createBookService, payload)
        resolve(response.status)
        yield put(saveNewBookAction(response.data))
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------UPDATE BOOK-----------------------
function* updateBookSaga({ payload, resolve }) {
    try {
        const response = yield call(updateBookService, payload)
        resolve(response.status)
        yield put(saveUpdateBookAction(response.data))

    } catch (error) {
        resolve(null);
    }
}

//------------------DELETE BOOK-----------------------
function* deleteBookSaga({ payload, resolve }) {
    try {
        const response = yield call(deleteBookService, payload)
        resolve(response.status)
        console.log(response)
    } catch (error) {
        resolve(null);
    }
}

//------------------GET BOOK DETAIL-----------------------
function* getDetailBookSaga({ payload, resolve }) {
    try {
        const response = yield call(getDetailBookService, payload)
        resolve(response)
        yield put(saveDetailBookAction(response.data))
    } catch (error) {
        resolve(null);
    }
}

//------------------GET MULTIPLE BOOK-----------------------
function* fetchMultipleBookSaga({ payload }) {
    try {
        const response = yield call(getMultipleDetailBookService, payload)
        yield put(saveMultipleBookAction(response))
    } catch (error) {
        console.log("error")
    }
}


export function* sagaBook() {
    yield takeLatest(GET_ALL_BOOK, fetchBookSaga)
    yield takeLatest(CREATE_BOOK, createBookSaga)
    yield takeLatest(UPDATE_BOOK, updateBookSaga)
    yield takeLatest(DELETE_BOOK, deleteBookSaga)
    yield takeLatest(GET_DETAIL_BOOK, getDetailBookSaga)

    yield takeLatest(GET_MULTIPLE_BOOK, fetchMultipleBookSaga)

    yield takeLatest(GET_FILTER_BOOK, fetchFilterBookSaga)
}
