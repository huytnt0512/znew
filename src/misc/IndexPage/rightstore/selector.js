import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectMyClass = (state) => state.rightReducer || INIT_STATE;

const selectRights = createSelector(selectMyClass, (state) => state.rights?.data || [])
const createRight = createSelector(selectMyClass, (state) => state.newRight || {})
const updateRight = createSelector(selectMyClass, (state) => state.updateRight || {})
const detailRight = createSelector(selectMyClass, (state) => state.detailRight || {})

const multiRight = createSelector(selectMyClass, (state) => state.multipleRight || [])
export {
    selectRights,
    createRight,
    updateRight,
    detailRight,
    multiRight
}