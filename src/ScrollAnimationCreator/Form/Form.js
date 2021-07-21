import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";

import "./Form.scss";

/**
 * @todo Break this form up into separate components.
 *
 * @namespace Form
 * @function Form
 * @description The form that is used to create an animated story.
 * @see https://codesandbox.io/s/github/formik/formik/tree/master/examples/field-arrays?from-embed=&file=/index.js:1981-2244
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 2.0.0
 */
export default function BTForm({
  story,
  setStory,
  backgroundColor,
  setBackgroundColor,
}) {
  return (
    <div className="Form-Container">
      <Formik
        initialValues={{
          stanzas: story,
        }}
        onSubmit={(values) => {
          setStory(values.stanzas);
        }}
      >
        {({ values }) => (
          <>
            <Form>
              <div className="Form">
                <div>[Default Stanza Background Color]</div>
                <input
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />

                <FieldArray name="stanzas">
                  {(stanzaHelpers) => (
                    <div>
                      {values.stanzas.length &&
                        values.stanzas.map((stanza, index) => (
                          <div className="Form-Stanza-Container" key={index}>
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => stanzaHelpers.remove(index)}
                            >
                              X
                            </button>
                            <label htmlFor={`stanzas.${index}.stanza`}>
                              Stanza
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
                                        <fieldset
                                          key={index + "" + imageindex}
                                          className="Form-Stanza-Container"
                                        >
                                          <button
                                            type="button"
                                            className="secondary"
                                            onClick={() => {
                                              imageHelpers.remove(imageindex);
                                            }}
                                          >
                                            X
                                          </button>
                                          <legend>
                                            Image {imageindex + 1}
                                          </legend>
                                          <div>
                                            <label
                                              htmlFor={`stanzas.${index}.images.${imageindex}.component`}
                                            >
                                              image
                                            </label>
                                            <Field
                                              name={`stanzas.${index}.images.${imageindex}.component`}
                                              as="select"
                                            >
                                              <option>Cave Entrance</option>
                                              <option>Blue Flowers</option>
                                              <option>Cherry Pie</option>
                                              <option>Constellation 1</option>
                                              <option>Kite</option>
                                              <option>Ramen</option>
                                              <option>Town</option>
                                              <option>Treasure</option>
                                              <option>Mountain</option>
                                              <option>Sun</option>
                                            </Field>
                                          </div>
                                          <div>
                                            <label
                                              htmlFor={`stanzas.${index}.images.${imageindex}.positionY`}
                                            >
                                              positionY
                                            </label>
                                            <Field
                                              name={`stanzas.${index}.images.${imageindex}.positionY`}
                                              as="select"
                                            >
                                              <option value="top">Top</option>
                                              <option value="center">
                                                Center
                                              </option>
                                              <option value="bottom">
                                                Bottom
                                              </option>
                                            </Field>
                                          </div>
                                          <div>
                                            <label
                                              htmlFor={`stanzas.${index}.images.${imageindex}.positionX`}
                                            >
                                              positionX
                                            </label>
                                            <Field
                                              name={`stanzas.${index}.images.${imageindex}.positionX`}
                                              as="select"
                                            >
                                              <option value="left">Left</option>
                                              <option value="center">
                                                Center
                                              </option>
                                              <option value="right">
                                                Right
                                              </option>
                                            </Field>
                                          </div>
                                          <div>
                                            <label
                                              htmlFor={`stanzas.${index}.images.${imageindex}.animation`}
                                            >
                                              animation
                                            </label>
                                            <Field
                                              name={`stanzas.${index}.images.${imageindex}.animation`}
                                              as="select"
                                            >
                                              <option value="fade">Fade</option>
                                              <option value="slidedown">
                                                Slide Down
                                              </option>
                                              <option value="slideup">
                                                Slide Up
                                              </option>
                                              <option value="slideleft">
                                                Slide Left
                                              </option>
                                              <option value="slideright">
                                                Slide Right
                                              </option>
                                              <option value="slidedownleft">
                                                Slide Down Left
                                              </option>
                                              <option value="slidedownright">
                                                Slide Down Right
                                              </option>
                                              <option value="slideupleft">
                                                Slide Up Left
                                              </option>
                                              <option value="slideupright">
                                                Slide Up Right
                                              </option>
                                            </Field>
                                          </div>
                                          <div>
                                            <label
                                              htmlFor={`stanzas.${index}.images.${imageindex}.stanzaCount`}
                                            >
                                              Stanza Count
                                            </label>
                                            <Field
                                              name={`stanzas.${index}.images.${imageindex}.stanzaCount`}
                                              type="number"
                                            />
                                          </div>
                                        </fieldset>
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
                            <div>
                              <label htmlFor={`stanzas.${index}.stanza`}>
                                Background
                              </label>
                              <Field
                                name={`stanzas.${index}.background`}
                                type="text"
                              />
                            </div>
                          </div>
                        ))}
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            stanzaHelpers.push({
                              stanza: "",
                              images: [],
                              background: backgroundColor,
                            })
                          }
                        >
                          Add Stanza
                        </button>
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>
              <button type="submit" className="Save-Button">
                Save
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
