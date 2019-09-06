import React from "react";
import { Provider } from "react-redux";
import { SearchPlayers } from "./pages";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <SearchPlayers />
    </Provider>
  );
};

export default App;
