const reducer = (state, action) => {

  if (state === undefined) {
    return {
      data: [],
      loading: false,
      error: null
    };
  }

  switch (action.type) {

    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: [ ...action.data ],
        loading: false,
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default reducer;