import React from 'react';
import image from '../../images/error.gif';

import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator__msg">
        Приносим извинения.<br/>
        Сервис, к сожалению, временно не доступен.<br/>
        Мы уже рашаем эту проблему.
      </div>
      <div className="error-indicator__picture">
        <img src={ image }  alt="Error happened"/>
      </div>
    </div>
  );
};

export default ErrorIndicator;