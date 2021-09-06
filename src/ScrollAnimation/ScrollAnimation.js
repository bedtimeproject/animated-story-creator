import React, { useEffect } from "react";

import DefaultTitle from "./DefaultTitle/DefaultTitle";
import CenteredTitle from "./CenteredTitle/CenteredTitle";
import DefaultAttribution from "./DefaultAttribution/DefaultAttribution";
import CenteredAttribution from "./CenteredAttribution/CenteredAttribution";
import Body from "./Body/Body";

/**
 * @function ScrollAnimation
 * @description A container for one Scroll Animation that handles the styles and
 * different logistical elements for a scroll animation poem. This should be
 * used in conjunction with `Stanza`, `Title`, and `Attribution`.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The parts of the poem to render on the
 * screen
 * @param {string} props.bodyStyleMinHeight The minimum height of the screen,
 * preferrably in Viewport heights that will be attached to the body.
 * @author Alexander Burdiss
 * @since 6/26/21
 * @version 1.2.0
 * @component
 * @example
 * <ScrollAnimation story={story}/>
 */
export default function ScrollAnimation({ story }) {
  const oneIndexPercent = 100 / (story.body.length + 2);

  useEffect(() => {
    if (document.querySelector("#page")) {
      const bodyStyleMinHeight = `${story.body.length * 100}vh`;
      document.querySelector("#page").style.minHeight = bodyStyleMinHeight;
      function handleScroll() {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset /
            (document.querySelector("#page").offsetHeight - window.innerHeight)
        );
      }
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.querySelector("#page").style.minHeight = "";
        document.body.style.removeProperty("--scroll");
      };
    }
  }, [story.body.length]);

  return (
    <div className="ScrollAnimation-Container">
      {/* Styles for the global object, just on this page */}
      <style>{`
        .ScrollAnimation-Container {
          font-family: ${story.font}
        }

        :root * {
          /* Pause the animation */
          animation-play-state: paused;
          /* Bind the animation to scroll */
          animation-delay: calc(var(--scroll) * -1s);
          /* These last 2 properites clean up overshoot weirdness */
          animation-iteration-count: 1;
          animation-fill-mode: both;
        }

        #title {
          animation-name: title;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        @keyframes title {
          0% {
            top: 34vh;
          }
          ${oneIndexPercent}% {
            top: -100vh;
          }
          100% {
            top: -100vh;
          }
        }
      `}</style>
      {
        {
          default: (
            <DefaultTitle
              background={story.stanzaBackgroundColor}
              author={story.author}
            >
              {story.title}
            </DefaultTitle>
          ),
          centered: (
            <CenteredTitle
              background={story.stanzaBackgroundColor}
              author={story.author}
            >
              {story.title}
            </CenteredTitle>
          ),
        }[story.titleCard]
      }
      <Body story={story} />
      <style>{`
        #attribution {
          animation-name: attribution;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        @keyframes attribution {
          0% {
            top: 100vh;
          }
          ${(story.body.length + 1) * oneIndexPercent}% {
            top: 100vh;
          }
          100% {
            top: 25vh;
          }
        }
      `}</style>
      {
        {
          default: (
            <DefaultAttribution
              background={story.stanzaBackgroundColor}
              backlink={"/poems/tales/"}
            >
              {story.attribution}
            </DefaultAttribution>
          ),
          centered: (
            <CenteredAttribution
              background={story.stanzaBackgroundColor}
              backlink={"/poems/tales/"}
            >
              {story.attribution}
            </CenteredAttribution>
          ),
        }[story.attributionCard]
      }
    </div>
  );
}
