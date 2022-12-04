import { INIT_STATE } from "./state";
import { createSelector } from "reselect";
const selectMyClass = (state) => state.middleReducer || INIT_STATE;

const selectMiddles = createSelector(selectMyClass, (state) => state.middles?.data || [])
const createMiddle = createSelector(selectMyClass, (state) => state.newMiddle || {})
const updateMiddle = createSelector(selectMyClass, (state) => state.updateMiddle || {})
const detailMiddle = createSelector(selectMyClass, (state) => state.detailMiddle || {})

const multiMiddle = createSelector(selectMyClass, (state) => state.multipleMiddle || [])
export {
    selectMiddles,
    createMiddle,
    updateMiddle,
    detailMiddle,
    multiMiddle
}