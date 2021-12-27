import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

import Form from "./Form/Form";
import "./ScrollAnimationCreator.scss";
// import { testStory } from "./testStory";

const startingObject = {
  defaultBackgroundColor: "#FFFFFF",
  stanzaBackgroundColor: "#FFFFFF",
  animationOverlap: "false",
  title: "",
  titleBackground: "#FFFFFF",
  author: "",
  titleCard: "default",
  attributionCard: "default",
  attributionBackground: "#FFFFFF",
  stanzaCard: "default",
  attribution: "",
  body: [],
};

/**
 * @function ScrollAnimationCreator
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 1.1.1
 */
export default function ScrollAnimationCreator() {
  const [story, setStory] = useState(startingObject);

  return (
    <div id={"wrapper"}>
      <Menu pageWrapId={"page"} outerContainerId={"wrapper"} width={350}>
        <Form story={story} setStory={setStory} />
      </Menu>
      <div id={"page"} className="Content-Wrap">
        <ScrollAnimation story={story} />
      </div>
    </div>
  );
}
