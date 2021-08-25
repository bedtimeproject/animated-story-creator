import React, { useEffect } from "react";

import ScrollAnimationCreator from "./ScrollAnimationCreator/ScrollAnimationCreator";

/**
 * @function App
 * @description The Root of the animated story creator application. This
 * component is rendered directly in strict mode in index.js
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 1.0.0
 */
export default function App() {
  useEffect(
    /**
     * @function App~setupComponent
     * @description This funciton handles all initial setup features of the app.
     * @author Alexander Burdiss
     * @since 8/24/21
     * @version 1.0.0
     */
    function setupComponent() {
      window.onbeforeunload = function () {
        return "All unsaved data will be lost!";
      };
    },
    []
  );

  return (
    <div>
      <ScrollAnimationCreator />
    </div>
  );
}
