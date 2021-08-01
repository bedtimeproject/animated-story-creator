import React from "react";
import { Field } from "formik";

/**
 * @namespace ImageRepeatable
 * @function ImageRepeatable
 * @description A repeatable image form field.
 * @author Alexander Burdiss
 * @since 8/1/21
 * @version 1.0.0
 * @param {*} props The JSX props passed to this React component
 * @param {number} props.index The index of the stanza this image form section
 * is in
 * @param {number} props.imageindex The index that this image is in the form
 * @param {Object} props.imageHelpers A collection of functions that can adjust
 * the form layout in relation to these images.
 */
export default function ImageRepeatable({ index, imageindex, imageHelpers }) {
  return (
    <fieldset key={index + "" + imageindex} className="Form-Stanza-Container">
      <button
        type="button"
        className="secondary"
        onClick={() => {
          imageHelpers.remove(imageindex);
        }}
      >
        X
      </button>
      <legend className="blue">Image {imageindex + 1}</legend>
      <div>
        <label htmlFor={`stanzas.${index}.images.${imageindex}.component`}>
          image
        </label>
        <Field
          name={`stanzas.${index}.images.${imageindex}.component`}
          as="select"
        >
          <optgroup label="Newport Nebraska">
            <option>Alaska Flag</option>
            <option>California Flag</option>
            <option>City Skyline</option>
            <option>Corn</option>
            <option>Grass</option>
            <option>Surfboard</option>
            <option>Swimsuit</option>
            <option>Umbrella</option>
            <option>Wave Outline</option>
          </optgroup>
          <optgroup label="Guide to Sunset">
            <option>Action Box</option>
            <option>Bed</option>
            <option>Blue Flowers</option>
            <option>Cave Entrance</option>
            <option>Cherry Pie</option>
            <option>Constellation 1</option>
            <option>Constellation 2</option>
            <option>Constellation 3</option>
            <option>Full Moon</option>
            <option>Kite</option>
            <option>Mountain</option>
            <option>Mountains</option>
            <option>Mount Everest</option>
            <option>Music Notes</option>
            <option>Oak</option>
            <option>Penny</option>
            <option>Pink Poodle</option>
            <option>Ramen</option>
            <option>Shrub 1</option>
            <option>Shrub 2</option>
            <option>Sun</option>
            <option>Town</option>
            <option>Treasure</option>
          </optgroup>
        </Field>
      </div>
      <div>
        <label htmlFor={`stanzas.${index}.images.${imageindex}.positionY`}>
          positionY
        </label>
        <Field
          name={`stanzas.${index}.images.${imageindex}.positionY`}
          as="select"
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </Field>
      </div>
      <div>
        <label htmlFor={`stanzas.${index}.images.${imageindex}.positionX`}>
          positionX
        </label>
        <Field
          name={`stanzas.${index}.images.${imageindex}.positionX`}
          as="select"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </Field>
      </div>
      <div>
        <label htmlFor={`stanzas.${index}.images.${imageindex}.animation`}>
          animation
        </label>
        <Field
          name={`stanzas.${index}.images.${imageindex}.animation`}
          as="select"
        >
          <option value="fade">Fade</option>
          <option value="slidedown">Slide Down</option>
          <option value="slideup">Slide Up</option>
          <option value="slideleft">Slide Left</option>
          <option value="slideright">Slide Right</option>
          <option value="slidedownleft">Slide Down Left</option>
          <option value="slidedownright">Slide Down Right</option>
          <option value="slideupleft">Slide Up Left</option>
          <option value="slideupright">Slide Up Right</option>
        </Field>
      </div>
      <div>
        <label htmlFor={`stanzas.${index}.images.${imageindex}.stanzaCount`}>
          Stanza Count
        </label>
        <Field
          name={`stanzas.${index}.images.${imageindex}.stanzaCount`}
          type="number"
        />
      </div>
    </fieldset>
  );
}
