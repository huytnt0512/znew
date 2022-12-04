import { INIT_STATE } from "./state";

import { SAVE_ALL_LEFT, SAVE_NEW_LEFT, SAVE_UPDATE_LEFT, SAVE_DETAIL_LEFT, SAVE_MULTIPLE_LEFT } from "./constants";

import produce from "immer";

export default function leftReducer(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_ALL_LEFT:
                draft.lefts.data = action.payload
                break;
            case SAVE_NEW_LEFT:
                draft.newLeft = action.payload
                break;
            case SAVE_UPDATE_LEFT:
                draft.updateLeft = action.payload
                break;
            case SAVE_DETAIL_LEFT:
                draft.detailLeft = action.payload
                break;
            case SAVE_MULTIPLE_LEFT:
                draft.multipleLeft = action.payload
                break;
            default:
                return state;
        }
    })
}