import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store";

import { PersistGate } from "redux-persist/integration/react";

import { Auth0Provider } from "@auth0/auth0-react";
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")).render(

<Auth0Provider
domain="dev-8mb1rz764yedfloz.us.auth0.com"
clientId="0Auos72FpYyjNCgu4aL4GsHkf4LKslsI"
authorizationParams={{
redirect_uri: window.location.origin
}}
>

<Provider store={store}>

<PersistGate loading={null} persistor={persistor}>

<App/>

</PersistGate>

</Provider>

</Auth0Provider>

);