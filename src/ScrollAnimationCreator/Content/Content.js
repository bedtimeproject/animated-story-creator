import React from "react";
import Body from "../../ScrollAnimation/Body/Body";
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation";
import Attribution from "../../ScrollAnimation/DefaultAttribution/DefaultAttribution";
import Title from "../../ScrollAnimation/DefaultTitle/DefaultTitle";

import "./Content.scss";

/**
 * @namespace Content
 * @function Content
 * @description Displays the content of the story, using the scroll animation
 * data passed in.
 * @param {*} props The JSX props passed to this React component
 * @param {Object} props.story The story object containing all of the data for
 * one animated story.
 * @author Alexander Burdiss
 * @since 7/15/21
 * @version 1.0.1
 */
export default function Content({ story }) {
  return (
    <div id={"page"} className="Content-Wrap">
      <ScrollAnimation bodyStyleMinHeight={`${story.body.length * 100}vh`}>
        <Title
          background={story.stanzaBackgroundColor}
          author={story.author}
          stanzaCount={story.body.length}
        >
          {story.title}
        </Title>
        <Body
          story={story}
          stanzaBackgroundColor={story.stanzaBackgroundColor}
          defaultBackgroundColor={story.defaultBackgroundColor}
          stanzaType="default"
        />
        <Attribution
          background={story.stanzaBackgroundColor}
          stanzaCount={story.body.length}
          backlink={"/poems/tales/"}
        >
          {story.attribution}
        </Attribution>
      </ScrollAnimation>
    </div>
  );
}
