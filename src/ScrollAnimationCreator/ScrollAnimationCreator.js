import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Content from "./Content/Content";

import Form from "./Form/Form";
import "./ScrollAnimationCreator.scss";
import { testStory } from "./testStory";

/**
 * @function ScrollAnimationCreator
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 1.0.0
 */
export default function ScrollAnimationCreator() {
  const [story, setStory] = useState(testStory);

  return (
    <div id={"wrapper"}>
      <Menu pageWrapId={"page"} outerContainerId={"wrapper"}>
        <Form story={story} setStory={setStory} />
      </Menu>
      <Content story={story} />
    </div>
  );
}
