import React from "react";

import { Field } from "formik";

/**
 * @namespace TitleCard
 * @function TitleCard
 * @description Provides the options on the form for the title card.
 * @author Alexander Burdiss
 * @since 8/8/21
 * @version 1.1.0
 */
export default function TitleCard() {
  return (
    <div className="Form-Stanza-Container">
      <div className="blue">Title Card</div>
      <div className="Title-Input-Group">
        <label htmlFor={"story.titleCard"}>Card Style</label>
        <Field name={"story.titleCard"} as="select">
          <option value="default">Default</option>
        </Field>
      </div>
      <div className="Title-Input-Group">
        <label htmlFor={"story.title"}>Title</label>
        <Field name="story.title"></Field>
      </div>
      <div className="Title-Input-Group">
        <label htmlFor={"story.author"}>Author</label>
        <Field name="story.author"></Field>
      </div>
      <div className="Background-Label-Input">
        <label htmlFor={"story.titleBackground"}>Background</label>
        <Field name={"story.titleBackground"} type="color" />
      </div>
    </div>
  );
}
