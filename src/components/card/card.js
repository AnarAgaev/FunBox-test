import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelect,
  hoverOnSelected,
  leaveOnSelected } from "../../actions";
import "../../images/cat.png";
import "./card.scss";

class Card extends Component {
  render() {
    const {
      id, selected, selectedHover, title, name, stuffing,
      portionsCount, portionsText, bonusCount, bonusText,
      mark, weight, picture, mount, description,
      descriptionEnded, toggleSelect, hoverOnSelected,
      leaveOnSelected } = this.props;

    const cardCaption = <div>
                          Чего сидишь? Порадуй котэ,&nbsp;
                          <span className="card__link"
                                onClick={ () => toggleSelect(id)}>
                            купи
                          </span>
                          <span className="card__point">.</span>
                        </div>;

    const clazz = mount === "0"
      ? 'card__item locked'
      : selected
        ? 'card__item selected'
        : 'card__item';

    return (
      <li className={ clazz } >
        <div className={ selectedHover ? "card selected-hover" : "card" }
             onClick={() => toggleSelect(id, mount)}
             onMouseEnter={() => hoverOnSelected(id, selected)}
             onMouseLeave={() => leaveOnSelected(id, selected)}
        >
          <div className="card__header">
            <div className="card__corner" />
            <div className="card__title">
              { title }
            </div>
          </div>

          <div className="card__body">
            <div className="card__name">{ name }</div>
            <div className="card__stuffing">{ stuffing }</div>
            <div className="card__portions">
              <span className="card__portions-count">
                { portionsCount }
              </span>
              { portionsText }
            </div>
            <div className="card__bonus">
              { bonusCount
                  ? <span className="card__bonus-count">
                        { bonusCount }
                    </span>
                  : null
              }
              { bonusText }
            </div>
            <div className="card__mark">
              { mark }
            </div>
            <div className="card__picture"
                 style={{ backgroundImage: `url('./images/${ picture }')` }} />
            <div className="card__weight">
              { weight }
            </div>
          </div>
        </div>

        <div className="card__caption">
          { mount !== "0"
              ? selected
                  ? description
                  : cardCaption
              : descriptionEnded }
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    toggleSelect: (id, mount) => toggleSelect(dispatch, id, mount),
    hoverOnSelected: (id, selected) => hoverOnSelected(dispatch, id, selected),
    leaveOnSelected: (id, selected) => leaveOnSelected(dispatch, id, selected)
  }
};

export default connect(
  undefined,
  mapDispatchToProps
)(Card);