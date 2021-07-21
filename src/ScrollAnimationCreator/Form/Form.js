import React, { useState } from "react";
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
  const [fileUpload, setFileUpload] = useState(null);

  /**
   * @function Form~useFile
   * @description Sets the uploaded file to the state variable, and calls
   * a function to load that file into state.
   * @author Alexander Burdiss
   * @since 7/20/21
   * @version 1.0.0
   */
  function useFile() {
    if (fileUpload != null) {
      const reader = new FileReader();
      reader.onload = setFileToGlobalState;
      reader.readAsText(fileUpload);
    } else {
      alert("Upload a file first!");
    }
  }

  /**
   * @function setFileToGlobalState
   * @description Loads the uploaded file into global state.
   * @param {event} event The event that triggered the FileReader
   * @author Alexander Burdiss
   * @since 7/20/21
   * @version 1.0.0
   */
  function setFileToGlobalState(event) {
    const json = JSON.parse(event.target.result);
    setStory(json);
  }

  /**
   * @function Form~triggerDownload
   * @description Creates a new JSON blob from the state object, and downloads
   * it.
   * @author Alexander Burdiss
   * @since 7/20/21
   * @version 1.0.0
   */
  function triggerDownload() {
    const json = JSON.stringify(story);
    const blob = new Blob([json]);
    const fileDownloadUrl = URL.createObjectURL(blob);
    const downloadButton = document.querySelector("#downloadLink");
    downloadButton.href = fileDownloadUrl;
    downloadButton.click();
  }

  return (
    <div className="Form-Container">
      <Formik
        initialValues={{
          stanzas: story,
        }}
        enableReinitialize
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
                      {values.stanzas.length
                        ? values.stanzas.map((stanza, index) => (
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
                                      ? stanza.images.map(
                                          (image, imageindex) => (
                                            <fieldset
                                              key={index + "" + imageindex}
                                              className="Form-Stanza-Container"
                                            >
                                              <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => {
                                                  imageHelpers.remove(
                                                    imageindex
                                                  );
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
                                                  <option>
                                                    Constellation 1
                                                  </option>
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
                                                  <option value="top">
                                                    Top
                                                  </option>
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
                                                  <option value="left">
                                                    Left
                                                  </option>
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
                                                  <option value="fade">
                                                    Fade
                                                  </option>
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
                                          )
                                        )
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
                          ))
                        : null}
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
              <div className="Save-Button-Container">
                <input
                  type="file"
                  accept="application/json"
                  onChange={(event) => setFileUpload(event.target.files[0])}
                />
                <button type="button" className="Save-Button" onClick={useFile}>
                  Upload
                </button>
                <button
                  type="button"
                  className="Save-Button"
                  onClick={triggerDownload}
                >
                  Download
                </button>
                <button type="submit" className="Save-Button Green-Button">
                  Render
                </button>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                style={{ display: "none" }}
                download={`story${new Date().toLocaleDateString()}${new Date().toLocaleTimeString()}.json`}
                href={""}
                id="downloadLink"
              >
                download it
              </a>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
}
