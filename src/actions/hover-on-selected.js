const hoverOnSelected = (dispatch, id, selected) => {
  if (selected) {
    console.log("*** Обрабатываем ховер так как карточка выбрана.");

    dispatch({
      type: 'HOVER_ON_SELECTED',
      id
    });
  }
};

export default hoverOnSelected;