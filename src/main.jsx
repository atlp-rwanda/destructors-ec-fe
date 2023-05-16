import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store } from './redux/app/store';
import store from "./redux/store";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const container = document.getElementById("root");
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
