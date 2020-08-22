import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCardProperty } from "../../actions";
import "./controller-goup.scss";

class ControllerGroup extends Component {
  render() {
    const {
      id, name, stuffing, portionsCount,
      portionsText, bonusCount, bonusText,
      mark, weight, mount, description,
      descriptionEnded, changeCardData
    } = this.props;

    return (
      <div className="controls">
        <h3 className="controls__title">#{id}</h3>
        <label>
          <span>Нимнование</span>
          <input value={name}
                 onChange={(event) => changeCardData(id, "name", event.target.value)} />
        </label>
        <label>
          <span>Состав</span>
          <input value={stuffing}
                 onChange={(event) => changeCardData(id, "stuffing", event.target.value)} />
        </label>
        <label>
          <span>Количество порций</span>
          <input value={portionsCount}
                 onChange={(event) => changeCardData(id, "portionsCount", event.target.value)} />
        </label>
        <label>
          <span>Словоформа для количества порций</span>
          <span className="sml-txt">(порция, порции, порцый)</span>
          <input value={portionsText}
                 onChange={(event) => changeCardData(id, "portionsText", event.target.value)} />
        </label>
        <label>
          <span>Количество подарочных мышей</span>
          <input name="bonusCount"
                 value={bonusCount}
                 onChange={(event) => changeCardData(id, "bonusCount", event.target.value)} />
        </label>
        <label>
          <span>Словоформа для подарочных мышей</span>
          <span className="sml-txt">(мышь в подарок, мыши, мышей)</span>
          <input value={bonusText}
                 onChange={(event) => changeCardData(id, "bonusText", event.target.value)} />
        </label>
        <label>
          <span>Комментарий</span>
          <input value={mark}
                 onChange={(event) => changeCardData(id, "mark", event.target.value)}/>
        </label>
        <label>
          <span>Количество</span>
          <input value={mount}
                 onChange={(event) => changeCardData(id, "mount", event.target.value)} />
        </label>
        <label>
          <span>Вес</span>
          <input value={weight}
                 onChange={(event) => changeCardData(id, "weight", event.target.value)} />
        </label>
        <label>
          <span>Описание</span>
          <input value={description}
                 onChange={(event) => changeCardData(id, "description", event.target.value)} />
        </label>
        <label>
          <span>Описание при отсутствии</span>
          <input value={descriptionEnded}
                 onChange={(event) => changeCardData(id, "descriptionEnded", event.target.value)} />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    changeCardData: (id, property, value) => changeCardProperty(dispatch, id, property, value)
  }
};

export default connect(
  undefined,
  mapDispatchToProps
)(ControllerGroup);