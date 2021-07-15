import React from "react";
import Body from "../../ScrollAnimation/Body/Body";
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation";
import Attribution from "../../ScrollAnimation/DefaultAttribution/DefaultAttribution";
import Title from "../../ScrollAnimation/DefaultTitle/DefaultTitle";
import { testStory } from "../testStory";
import "./Content.scss";

export default function Content() {
  const stanzaBackgroundColor = "#8bc9e4";
  const background = "#EEEEEE";

  return (
    <div id={"page"} className="Content-Wrap">
      <ScrollAnimation bodyStyleMinHeight={`${testStory.length * 100}vh`}>
        <Title background={stanzaBackgroundColor} author="FostyWally">
          The Guide to Sunset
        </Title>
        <Body
          stanzas={testStory}
          stanzaBackgroundColor={stanzaBackgroundColor}
          defaultBackgroundColor={background}
          stanzaType="default"
        />
        <Attribution
          background={stanzaBackgroundColor}
          stanzaCount={testStory.length}
          backlink={"/poems/tales/"}
        >
          <p>Written by FostyWally</p>
          <p>Animated by Captain Code</p>
        </Attribution>
      </ScrollAnimation>
    </div>
  );
}
