import React from "react";
import Body from "../../ScrollAnimation/Body/Body";
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation";
import Attribution from "../../ScrollAnimation/DefaultAttribution/DefaultAttribution";
import Title from "../../ScrollAnimation/DefaultTitle/DefaultTitle";

import "./Content.scss";

export default function Content({ story, backgroundColor }) {
  const stanzaBackgroundColor = "#8bc9e4";

  return (
    <div id={"page"} className="Content-Wrap">
      <ScrollAnimation bodyStyleMinHeight={`${story.length * 100}vh`}>
        <Title background={stanzaBackgroundColor} author="FostyWally">
          A Scroll Animation
        </Title>
        <Body
          stanzas={story}
          stanzaBackgroundColor={stanzaBackgroundColor}
          defaultBackgroundColor={backgroundColor}
          stanzaType="default"
        />
        <Attribution
          background={stanzaBackgroundColor}
          stanzaCount={story.length}
          backlink={"/poems/tales/"}
        >
          <p>Written by FostyWally</p>
          <p>Animated by Captain Code 😎</p>
        </Attribution>
      </ScrollAnimation>
    </div>
  );
}
