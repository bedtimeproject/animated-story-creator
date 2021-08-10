import React from "react";

import { Field } from "formik";

/**
 * @namespace AttributionCard
 * @function AttributionCard
 * @description Provides the options on the form for the attribution card.
 * @author Alexander Burdiss
 * @since 8/8/21
 * @version 1.1.0
 */
export default function AttributionCard() {
  return (
    <div className="Form-Stanza-Container">
      <div className="blue">Attribution Card</div>
      <div className="Title-Input-Group">
        <label htmlFor={"story.attributionCard"}>Card Style</label>
        <Field name={"story.attributionCard"} as="select">
          <option value="default">Default</option>
        </Field>
      </div>
      <div>
        <label htmlFor={"story.attribution"}>Attributions</label>
        <Field
          name="story.attribution"
          as="textarea"
          rows="4"
          cols="30"
        ></Field>
      </div>
      <div className="Background-Label-Input">
        <label htmlFor={"story.attributionBackground"}>Background</label>
        <Field name={"story.attributionBackground"} type="color" />
      </div>
    </div>
  );
}
