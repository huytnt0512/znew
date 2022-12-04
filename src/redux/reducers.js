import { combineReducers } from "redux";
import leftReducer from "../page/IndexPage/leftstore/reducer";
import middleReducer from '../page/IndexPage/middlestore/reducer';
import rightReducer from '../page/IndexPage/rightstore/reducer';
import bookReducer from '../page/CategoryPage/bookstore/reducer';
export default function createReducer() {
    const rootReducer = combineReducers({
        leftReducer,
        middleReducer,
        rightReducer,
        bookReducer
    })
    return rootReducer;
}