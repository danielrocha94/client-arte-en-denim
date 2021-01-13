export const dispatchAction = function(dispatch, res, type) {
  if(res.status !== 200 || res.status !== 201 && res.data.errors) {
    console.error(res.data.errors);
  }

  let payload = res.data || Object.values(res.data.data)[0];

  dispatch({
    type,
    payload
  });

  return res.data.data;
}