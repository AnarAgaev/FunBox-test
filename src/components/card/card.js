import React from "react";
import "./card.scss";

const cardCaption = <div>
    Чего сидишь? Порадуй котэ,&nbsp;
    <span className="card__link">купи</span>
    <span className="card__point">.</span>
  </div>;

const Card = ({
  selected, title, name, stuffing, portionsCount,
  portionsText, bonusCount, bonusText, mark, weight,
  picture, mount, description, descriptionEnded }) => {

  const clazz = mount === '0'
    ? 'card__item locked'
    : selected
      ? 'card__item selected'
      : 'card__item';

  return (
    <li className={ clazz } >
      <div className="card">
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
        { mount !== '0'
            ? selected
                ? description
                : cardCaption
            : descriptionEnded }
      </div>
    </li>
  );
};

export default Card;