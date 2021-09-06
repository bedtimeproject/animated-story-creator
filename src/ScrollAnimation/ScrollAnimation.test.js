import { render } from "@testing-library/react";
import ScrollAnimation from "./ScrollAnimation";

import { testStory } from "../ScrollAnimationCreator/testStory";

test("renders ScrollAnimation", () => {
  render(<ScrollAnimation story={testStory} />);
});
