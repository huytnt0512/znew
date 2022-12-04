import { INIT_STATE } from "./state";

import { SAVE_ALL_MIDDLE, SAVE_NEW_MIDDLE, SAVE_UPDATE_MIDDLE, SAVE_DETAIL_MIDDLE, SAVE_MULTIPLE_MIDDLE } from "./constants";

import produce from "immer";

export default function middleReducer(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_ALL_MIDDLE:
                draft.middles.data = action.payload
                break;
            case SAVE_NEW_MIDDLE:
                draft.newMiddle = action.payload
                break;
            case SAVE_UPDATE_MIDDLE:
                draft.updateMiddle = action.payload
                break;
            case SAVE_DETAIL_MIDDLE:
                draft.detailMiddle = action.payload
                break;
            case SAVE_MULTIPLE_MIDDLE:
                draft.multipleMiddle = action.payload
                break;
            default:
                return state;
        }
    })
}