// @ts-check
import React from "react";
import "./DefaultAttribution.scss";

import { getContrast } from "../../utils/getContrast/getContrast";

/**
 * @namespace DefaultAttribution
 * @function DefaultAttribution
 * @description The final slide of text on a scroll animation
 * @author Alexander Burdiss
 * @since 6/5/21
 * @version 1.3.0
 * @param {object} props The JSX props passed to this React component
 * @param {React.Component} props.children The text to render on this component
 * @param {string} props.background The background to render on this component
 * @param {string} props.backlink
 */
export default function DefaultAttribution({ children, background, backlink }) {
  return (
    <div
      className="ScrollAnimation-Attribution-Container"
      style={{ backgroundColor: background }}
      id="attribution"
    >
      <div
        className="ScrollAnimation-Attribution-Border"
        style={{
          color: getContrast(background),
        }}
      >
        {children}
      </div>
    </div>
  );
}
