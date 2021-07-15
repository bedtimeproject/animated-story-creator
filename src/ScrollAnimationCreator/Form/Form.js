import React from "react";

import "./Form.scss";

/**
 * @namespace Form
 * @function Form
 * @description The form that is used to create an animated story.
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 1.0.0
 */
export default function Form({
  story,
  setStory,
  backgroundColor,
  setBackgroundColor,
}) {
  function onSave() {}

  return (
    <div className="Form">
      <form>
        <div className="disclaimer">
          Note: Items wrapped with [] brackets will not be saved.
        </div>
        <div>
          <div>[Default Stanza Background Color]</div>
          <input
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        {story.map((stanza, i) => {
          return (
            <div>
              <div>Stanza {i + 1}</div>
              <input key={i} value={stanza.stanza.toString()} />
            </div>
          );
        })}
      </form>
      <button onClick={onSave} className="Save-Button">
        Save
      </button>
    </div>
  );
}
