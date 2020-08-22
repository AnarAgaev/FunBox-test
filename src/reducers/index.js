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

    case 'SELECT_CARD':
      const cardIdx = state.data.findIndex((el) => el.id === action.id);

      // Update object task only if mount of position more then zero
      const oldCard = state.data[cardIdx];
      const newCard = {
        ... oldCard,
        selectedHover: false,
        title: 'Сказочное заморское яство',
        selected: oldCard.mount !== 0
          ? !oldCard.selected
          : oldCard.selected
      };

      // Construct new data array
      const newData = [
        ...state.data.slice(0, cardIdx),
        newCard,
        ...state.data.slice(cardIdx + 1)
      ];
      return {
        ...state,
        data: newData
      };

    case 'HOVER_ON_SELECTED':
      const hoverIdx = state.data.findIndex((el) => el.id === action.id);
      const oldHoverCard = state.data[hoverIdx];
      const newHoverCard = {
        ... oldHoverCard,
        selectedHover: true,
        title: 'Котэ не одобряет?'
      };

      const newHoverData = [
        ...state.data.slice(0, hoverIdx),
        newHoverCard,
        ...state.data.slice(hoverIdx + 1)
      ];
      return {
        ...state,
        data: newHoverData
      };

    case 'LEAVE_ON_SELECTED':
      const leaveIdx = state.data.findIndex((el) => el.id === action.id);
      const oldLeaveCard = state.data[leaveIdx];
      const newLeaveCard = {
        ... oldLeaveCard,
        selectedHover: false,
        title: 'Сказочное заморское яство'
      };

      const newLeaveData = [
        ...state.data.slice(0, leaveIdx),
        newLeaveCard,
        ...state.data.slice(leaveIdx + 1)
      ];
      return {
        ...state,
        data: newLeaveData
      };

    default:
      return state;
  }
};

export default reducer;