import { INIT_STATE } from "./state";

import { SAVE_ALL_RIGHT, SAVE_NEW_RIGHT, SAVE_UPDATE_RIGHT, SAVE_DETAIL_RIGHT, SAVE_MULTIPLE_RIGHT, SAVE_FILTER_RIGHT } from "./constants";

import produce from "immer";

export default function rightReducer(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_ALL_RIGHT:
                draft.rights.data = action.payload
                break;
            case SAVE_NEW_RIGHT:
                draft.newRight = action.payload
                break;
            case SAVE_UPDATE_RIGHT:
                draft.updateRight = action.payload
                break;
            case SAVE_DETAIL_RIGHT:
                draft.detailRight = action.payload
                break;
            case SAVE_MULTIPLE_RIGHT:
                draft.multipleRight = action.payload
                break;
            case SAVE_FILTER_RIGHT:
                draft.filterRight = action.payload
                break;
            default:
                return state;
        }
    })
}