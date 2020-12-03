import axios from "axios";
export const CALL_API = "CALL_API";
const API_BASE_URL = "http://localhost:3001";
const apiMiddleware = (store) => (next) => (action) => {
  const callApi = action[CALL_API];
  if (typeof callApi === "undefined") {
    return next(action);
  }

  const [
    requestStartedType,
    requestSucceededType,
    requestFailedType,
  ] = callApi.types;
  next({ type: requestStartedType });

  const { types, ...params } = callApi;

  return makeCall(params)
    .then((resp) => {
      next({
        type: requestSucceededType,
        payload: resp
      });
    })
    .catch((error) => next({ type: requestFailedType }));
};

const makeCall = ({ endpoint, body, method }) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const params = {
    url: url,
    method: method,
    data: body,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return axios(params)
    .then((resp) => resp.data)
    .catch((error) => error.error);
};
export default apiMiddleware;
