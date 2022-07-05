import { createStore } from "redux";
import { employeeReducer } from "./list/list_red";
import { just_filter } from "./filter/filter_red";
import { combineReducers } from "redux";

const root_reducer = combineReducers({
  employees: employeeReducer,
  filter: just_filter,
});

const store = createStore(root_reducer);

export default store;
