const toggleSelect = (dispatch, id) => {

  console.log("*** ВЫБИРАЕМ если карточка не выбрана или ОТМЕНЯЕМ ВЫБОР иначе.");

  dispatch({
    type: 'SELECT_CARD',
    id
  });
};

export default toggleSelect;