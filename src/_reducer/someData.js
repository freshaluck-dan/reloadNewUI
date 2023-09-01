import { useLocalStorage, useLocalStorageSet } from "utils";
import { SOMEDATA, REMOVEDATA } from "../_action/types";

let someDetails = useLocalStorage("data");

const initialState = {
  // detail: JSON.parse(someDetails),
  detail: null,
};

function someData(state = initialState, action) {
  switch (action.type) {
    case SOMEDATA:
      useLocalStorageSet("data", JSON.stringify(action.payload));
      // localStorage.setItem("data", JSON.stringify(action.payload));
      return {
        // ...state,
        detail: action.payload,
        // detail: action.payload,
      };
    case REMOVEDATA:
      // localStorage.removeItem("data");
      return {
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default someData;
