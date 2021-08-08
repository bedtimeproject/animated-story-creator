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
      <label htmlFor={`stanzas.${index}.stanza`} className="blue">
        Stanza {index + 1}
      </label>
      <Field
        name={`stanzas.${index}.stanza`}
        placeholder="Enter your stanza text here."
        as="textarea"
        rows="6"
        cols="30"
      />
      <FieldArray name={`stanzas.${index}.images`}>
        {(imageHelpers) => (
          <>
            {stanza.images.length
              ? stanza.images.map((image, imageindex) => (
                  <ImageRepeatable
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
                  component: undefined,
                  positionX: "center",
                  positionY: "center",
                  animation: "fade",
                  stanzaCount: 1,
                })
              }
            >
              Add Image
            </button>
          </>
        )}
      </FieldArray>
      <div className="Background-Label-Input">
        <label htmlFor={`stanzas.${index}.stanza`}>Background</label>
        <Field name={`stanzas.${index}.background`} type="text" />
      </div>
    </div>
  );
}
