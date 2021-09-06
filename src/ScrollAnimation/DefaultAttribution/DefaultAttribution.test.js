import { render } from "@testing-library/react";
import DefaultAttribution from "./DefaultAttribution";

test("renders DefaultAttribution", () => {
  render(<DefaultAttribution background={"#FFFFFF"} />);
});
