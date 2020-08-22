const toggleSelect = (dispatch, id, mount) => {
  if (mount !== '0') {
    console.log("*** ВЫБИРАЕМ если карточка не выбрана или ОТМЕНЯЕМ ВЫБОР иначе.");

    dispatch({
      type: 'SELECT_CARD',
      id
    });
  }
};

export default toggleSelect;