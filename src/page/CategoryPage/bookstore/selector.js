import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectMyClass = (state) => state.bookReducer || INIT_STATE;

const selectBooks = createSelector(selectMyClass, (state) => state.books?.data || [])
const createBook = createSelector(selectMyClass, (state) => state.newBook || {})
const updateBook = createSelector(selectMyClass, (state) => state.updateBook || {})
const detailBook = createSelector(selectMyClass, (state) => state.detailBook || {})

const multiBook = createSelector(selectMyClass, (state) => state.multipleBook || [])

const filterBook = createSelector(selectMyClass, (state) => state.filterBook || [])
export {
    selectBooks,
    createBook,
    updateBook,
    detailBook,
    multiBook,
    filterBook
}