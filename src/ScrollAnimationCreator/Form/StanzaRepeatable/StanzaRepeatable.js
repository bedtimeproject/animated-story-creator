import React from "react";

import { Field, FieldArray } from "formik";
import ImageRepeatable from "../ImageRepeatable/ImageRepeatable";

/**
 * @namespace StanzaRepeatable
 * @description A repeatable stanza, that provides all of the options for a
 * stanza on the form.
 * @author Alexander Burdiss
 * @since 8/1/21
 * @version 1.0.0
 * @param {*} props The JSX props passed to this React component
 * @param {number} props.index The index of this stanza in the form
 * @param {Object} props.stanza The object containing the data for this stanza
 * @param {Object} props.stanzaHelpers The functions handling adjusting the
 * form layout for the stanzas
 */
export default function StanzaRepeatable({ index, stanza, stanzaHelpers }) {
  return (
    <div className="Form-Stanza-Container" key={index}>
      <button
        type="button"
        className="secondary"
        onClick={() => stanzaHelpers.remove(index)}
      >
        X
      </button>
      <label htmlFor={`story.body.${index}.stanza`} className="blue">
        Stanza {index + 1}
      </label>
      <Field
        name={`story.body.${index}.stanza`}
        placeholder="Enter your stanza text here."
        as="textarea"
        rows="6"
        cols="30"
      />
      <FieldArray name={`story.body.${index}.images`}>
        {(imageHelpers) => (
          <>
            {stanza.images.length
              ? stanza.images.map((image, imageindex) => (
                  <ImageRepeatable
                    key={index + "" + imageindex}
                    index={index}
                    imageindex={imageindex}
                    imageHelpers={imageHelpers}
                  />
                ))
              : null}
            <button
              type="button"
              onClick={() =>
                imageHelpers.push({
                  component: "null",
                  url: "",
                  positionX: 50,
                  positionY: 50,
                  animation: "fade",
                  stanzaCount: 1,
                  rotation: 0,
                  scale: 1,
                })
              }
            >
              Add Image
            </button>
          </>
        )}
      </FieldArray>
      <div className="Background-Label-Input">
        <label htmlFor={`story.body.${index}.stanza`}>Background</label>
        <Field name={`story.body.${index}.background`} type="text" />
        <Field name={`story.body.${index}.background`} type="color" />
      </div>
    </div>
  );
}
