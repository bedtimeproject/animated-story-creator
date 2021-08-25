import React, { useState } from "react";
import { Formik, Form, FieldArray, Field } from "formik";

import "./Form.scss";
import StanzaRepeatable from "./StanzaRepeatable/StanzaRepeatable";
import TitleCard from "./TitleCard/TitleCard";
import AttributionCard from "./AttributionCard/AttributionCard";

/**
 * @namespace Form
 * @function Form
 * @description The form that is used to create an animated story.
 * @see https://codesandbox.io/s/github/formik/formik/tree/master/examples/field-arrays?from-embed=&file=/index.js:1981-2244
 * @author Alexander Burdiss
 * @since 7/11/21
 * @version 2.0.1
 */
export default function BTForm({ story, setStory }) {
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
          story: story,
        }}
        enableReinitialize
        onSubmit={(values) => {
          setStory(values.story);
        }}
      >
        {({ values }) => (
          <>
            <Form>
              <div className="Form">
                <div className="Default-Option">
                  <label htmlFor="defaultBackground">Default Background</label>
                  <input
                    id="defaultBackground"
                    type="color"
                    value={values.story.defaultBackgroundColor}
                    onChange={(e) => {
                      setStory(() => {
                        return {
                          ...values.story,
                          defaultBackgroundColor: e.target.value,
                        };
                      });
                    }}
                  />
                </div>

                <div className="Default-Option">
                  <label htmlFor="cardBackground">Card Background</label>
                  <input
                    id="cardBackground"
                    type="color"
                    value={values.story.stanzaBackgroundColor}
                    onChange={(e) =>
                      setStory(() => {
                        return {
                          ...values.story,
                          stanzaBackgroundColor: e.target.value,
                        };
                      })
                    }
                  />
                </div>

                <div className="Default-Option">
                  <div>
                    <label htmlFor={"story.stanzaCard"}>
                      Stanza Card Style
                    </label>
                  </div>
                  <Field name={"story.stanzaCard"} as="select">
                    <option value="default">Default</option>
                  </Field>
                </div>

                <div className="Default-Option">
                  <div>
                    <label htmlFor={"story.animationOverlap"}>
                      Animation Overlap
                    </label>
                  </div>
                  <Field name={"story.animationOverlap"} as="select">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </Field>
                </div>

                <TitleCard />

                <FieldArray name="story.body">
                  {(stanzaHelpers) => (
                    <div>
                      {values.story.body?.length
                        ? values.story.body.map((stanza, index) => (
                            <StanzaRepeatable
                              key={index}
                              index={index}
                              stanza={stanza}
                              stanzaHelpers={stanzaHelpers}
                            />
                          ))
                        : null}
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            stanzaHelpers.push({
                              stanza: "",
                              images: [],
                              background: values.story.defaultBackgroundColor,
                            })
                          }
                        >
                          Add Stanza
                        </button>
                      </div>
                      <AttributionCard />
                    </div>
                  )}
                </FieldArray>
              </div>
              <div className="Save-Button-Container">
                <input
                  className="File-Upload"
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
