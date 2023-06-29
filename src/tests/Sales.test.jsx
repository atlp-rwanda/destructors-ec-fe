import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SalesPage from "../pages/SalesPage";
import store from "../redux/store";

describe("Sales Status Updates", () => {
  it("It should render Sales Page", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SalesPage />
        </Provider>
      </BrowserRouter>
    );
  });
});
