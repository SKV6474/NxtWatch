import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";

import HeaderComponent from ".";

describe("Header Component", () => {
  it("Test for LogoutPopup", () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="*" component={HeaderComponent} />
      </MemoryRouter>
    );

    const myElement = container.querySelector("#LogOutBtnId") as Element;

    if (myElement !== null) {
      fireEvent.click(myElement);
    }

    const LogoutPopup = container.querySelector("#LogOutPopUp");
    expect(LogoutPopup).toBeInTheDocument();

    const CancelBtnElement = container.querySelector("#CancelBtnId");
    if (CancelBtnElement !== null) {
      fireEvent.click(CancelBtnElement);
    }
    const LogoutPopupOnCancel = container.querySelector("#LogOutPopUp");
    expect(LogoutPopupOnCancel).not.toBeInTheDocument();
  });

  it("Test for Menu Pop Up", () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="*" component={HeaderComponent} />
      </MemoryRouter>
    );

    const myElement = container.querySelector("#MenuPopUpTracker");

    if (myElement !== null) {
      fireEvent.click(myElement);
    }
    const MenuPopup = container.querySelector("#MenuPopUp");
    expect(MenuPopup).toBeInTheDocument();
  });
});
