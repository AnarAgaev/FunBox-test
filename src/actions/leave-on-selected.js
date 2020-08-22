const leaveOnSelected = (dispatch, id, selected) => {
  if (selected) {
    console.log("*** Обрабатываем уход курсора с карточки так как карточка выбрана.");

    dispatch({
      type: 'LEAVE_ON_SELECTED',
      id
    });
  }
};

export default leaveOnSelected;