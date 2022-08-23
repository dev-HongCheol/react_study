import { finishLoading, startLoading } from '../moudle/loading';

export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch({ type: startLoading(type) });
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch({ type: finishLoading(type) });
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch({ type: finishLoading(type) });
      throw e;
    }
  };
}
