import { RANKING_ERROR, RANKING_LOADED, RANKING_LOADING } from "_action/types";
import axios from "axios";

export const getRanking = () => (dispatch) => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json",
    },
  };

  dispatch({ type: RANKING_LOADING });
  axios
    .get(`${process.env.REACT_APP_API}/billpay/api/transaction/ranking`, config)
    .then((res) => {
      dispatch({ type: RANKING_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: RANKING_ERROR, payload: err });
    });
};
