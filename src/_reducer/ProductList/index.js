import {
  GET_OTHERDATA,
  PRODUCTDATA,
  PRODUCTDATA_ERROR,
  PRODUCTDATA_LOADING,
} from "../../_action/types.js";

const initialState = {
  loading: false,
  productsData: null,
  dataType: null,
  success: false,
  error: false,
  otherdata: null,
  productData_Error: null,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_OTHERDATA:
      return {
        ...state,
        otherdata: action.payload,
      };
    case PRODUCTDATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTDATA:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: false,
        dataType: action.payload.dataType,
        productsData: action.payload.data,
      };
    case PRODUCTDATA_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
        dataType: null,
        productData_Error: action.payload,
      };
    default:
      return state;
  }
}

export default productReducer;
