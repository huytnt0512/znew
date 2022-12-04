import { INIT_STATE } from "./state";

import { SAVE_ALL_BOOK, SAVE_NEW_BOOK, SAVE_UPDATE_BOOK, SAVE_DETAIL_BOOK, SAVE_MULTIPLE_BOOK, SAVE_FILTER_BOOK } from "./constants";

import produce from "immer";

export default function bookReducer(state = INIT_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case SAVE_ALL_BOOK:
                draft.books.data = action.payload
                break;
            case SAVE_NEW_BOOK:
                draft.newBook = action.payload
                break;
            case SAVE_UPDATE_BOOK:
                draft.updateBook = action.payload
                break;
            case SAVE_DETAIL_BOOK:
                draft.detailBook = action.payload
                break;
            case SAVE_MULTIPLE_BOOK:
                draft.multipleBook = action.payload
                break;
            case SAVE_FILTER_BOOK:
                draft.filterBook = action.payload
                break;
            default:
                return state;
        }
    })
}