module.exports = function promiseMiddleware() {
  return next => action => {
    const promise = action.promise;
    const type = action.type;

    if (!promise) return next(action);

    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({ type: REQUEST });

    return promise
      .then(res => {
        next({ data: res, type: SUCCESS });

        return true;
      })
      .catch(result => {
        next({
          message: (result.error) ? (result.error.message || result.error) : 'There was an error.',
          status: result.response ? result.response.status : null,
          type: FAILURE 
        });
        console.log(result);

        return false;
      });
  };
}