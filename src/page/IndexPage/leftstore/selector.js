import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectMyClass = (state) => state.leftReducer || INIT_STATE;

const selectLefts = createSelector(selectMyClass, (state) => state.lefts?.data || [])
const createLeft = createSelector(selectMyClass, (state) => state.newLeft || {})
const updateLeft = createSelector(selectMyClass, (state) => state.updateLeft || {})
const detailLeft = createSelector(selectMyClass, (state) => state.detailLeft || {})

const multiLeft = createSelector(selectMyClass, (state) => state.multipleLeft || [])

const filterLeft = createSelector(selectMyClass, (state) => state.filterLeft || [])
export {
    selectLefts,
    createLeft,
    updateLeft,
    detailLeft,
    multiLeft,
    filterLeft
}