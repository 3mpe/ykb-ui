import React from "react";
import {render} from "@testing-library/react";

import Header from "./index";

describe("<Header />", () => {
  it("should render the header", () => {
    const { container } = render(<Header title="UI Development Challenge"/>);

    const selectedHeader = container.querySelectorAll('.header');
    const headerLength = selectedHeader.length;
    expect(headerLength).toBe(1);

  });

  it("should render the header text prop", () => {
    const { container } = render(<Header title="UI Development Challenge"/>);
    const selectedHeader = container.querySelectorAll('.header');
    const selectedHeaderText = selectedHeader[0].textContent;

    expect(selectedHeaderText).toBe("UI Development Challenge");

  });

  it('should toMatchSnapshot', function () {
    const { container } = render(<Header title="UI Development Challenge"/>);
    expect(container.firstChild).toMatchSnapshot()
  });
});