const changeCardProperty = (dispatch, id, property, value) => {
  console.log(`*** Редактируем свойство ${property} у карточки номер ${id}.`);

  dispatch({
    type: 'CHANGE_PROPERTY',
    id,
    property,
    value
  });
};

export default changeCardProperty;