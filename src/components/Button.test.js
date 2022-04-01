import { render } from "@testing-library/preact";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";
import { ButtonM } from "./ButtonM";

describe("Button", () => {
  it("render button", () => {
    const { getByText } = render(<Button />);
    expect(getByText("Click me!")).toBeTruthy();
  });
  it("should render mantine button", () => {
    const { getByText } = render(<ButtonM>my text</ButtonM>);
    expect(getByText("my text")).toBeTruthy();
  });
});
