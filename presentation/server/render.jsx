import React from "react";
import { Provider } from "react-redux";
import { StaticRouter, RouterContext } from "react-router";
import ReactDOMServer from "react-dom/server";
import configureStore from "../src/redux/store";
import Routes from "../src/components/routes";

export default function render(url, initialState) {
  const store = configureStore(initialState);

  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </StaticRouter>
  );

  if (context.url) {
    return render(redirect, initialState);
  }

  const finalState = store.getState();

  return {
    html,
    finalState
  };
}
