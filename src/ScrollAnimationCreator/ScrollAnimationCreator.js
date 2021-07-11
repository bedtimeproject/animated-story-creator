import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";

import Form from "./Form/Form";
import "./ScrollAnimationCreator.scss";

/**
 * @function ScrollAnimationCreator
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 1.0.0
 *
 * @todo Make the scrolling happen inside div#page, not outside.
 */
export default function ScrollAnimationCreator() {
  return (
    <div id={"wrapper"}>
      <Menu pageWrapId={"page"} outerContainerId={"wrapper"}>
        <Form />
      </Menu>
      <div id={"page"} className="Content-Wrap">
        <div>Hello, Content!</div>
      </div>
    </div>
  );
}
