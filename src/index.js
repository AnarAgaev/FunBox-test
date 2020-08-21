import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { DataServiceProvider } from "./components/data-service-context";
import ErrorBoundary from "./components/error-boundary";
import DataService from "./services/data-service";
import App from "./components/app";
import store from "./store";

// Создаём экземпляр сервиса получения данных, что бы передать его через контекст
const dataService = new DataService();

ReactDOM.render(
  <Provider store={ store }>
    <ErrorBoundary>
      <DataServiceProvider value={ dataService }>
        <Router>
          <App />
        </Router>
      </DataServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);