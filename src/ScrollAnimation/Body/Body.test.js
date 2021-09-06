import { render } from "@testing-library/react";
import Body from "./Body";

import { testStory } from "../../ScrollAnimationCreator/testStory";

test("renders Body", () => {
  render(<Body story={testStory} />);
});
