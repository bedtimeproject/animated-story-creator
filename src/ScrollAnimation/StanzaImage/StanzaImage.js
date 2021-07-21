import React from "react";

import "./StanzaImage.scss";
import {
  fade,
  slidedown,
  slidedownleft,
  slidedownright,
  slideleft,
  slideright,
  slideup,
  slideupleft,
  slideupright,
} from "./StanzaImageUtils";

import BlueFlowers from "../../assets/images/BlueFlowers.svg";
import CaveEntrance from "../../assets/images/CaveEntrance.svg";
import CherryPie from "../../assets/images/CherryPie.svg";
import Constellation1 from "../../assets/images/Constellation1.svg";
import Kite from "../../assets/images/BlueKite.svg";
import Ramen from "../../assets/images/Ramen.svg";
import Town from "../../assets/images/Town.svg";
import Treasure from "../../assets/images/Treasure.svg";
import Mountain from "../../assets/images/Mountain.svg";
import Sun from "../../assets/images/Sun.svg";

/**
 * @function stanzaImage
 * @description Displays One image for the stanza.
 * @param props The JSX props passed to this React component
 * @param {React.Component} props.children The image to render inside this
 * stanza.
 * @param {number} props.index The stanza index that this image is being
 * rendered with
 * @param {number} props.imageIndex The image index for the given stanza
 * @param {number} props.stanzaCount The number of Stanzas in this total
 * animation
 * @param {string} [props.animation='fade'] The animation type that will be
 * displayed on this component. Available animations are:
 * 'fade', 'slidedown', 'slideup', 'slideleft', 'slideright', 'slidedownleft',
 * 'slidedownright', 'slideupleft', 'slideupright'
 * @param {string} props.positionX The horizontal position of the image
 * relative to the rest of the scroll animation. Available positions are:
 * 'left', 'center', 'right'
 * @param {string} props.positionY The vertical position of the image relative
 * to the rest of the scroll animation. Available positions are:
 * 'top', 'center', 'bottom'
 * @param {number} props.stanzaDuration The number of stanzas that this image
 * should remain onscreen.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.0.0
 */
export default function StanzaImage({
  children,
  index,
  imageIndex,
  stanzaCount,
  animation = "fade",
  positionX,
  positionY,
  stanzaDuration,
}) {
  const oneIndexPercent = 100 / (stanzaCount + 2);

  return (
    <div>
      <style>{`
        #stanza${index}Image${imageIndex} {
          animation-name: stanza${index}${animation}${imageIndex};
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }

        #stanza${index}Image${imageIndex} img {
          height: 250px;
        }

        ${
          animation === "fade"
            ? fade(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedown"
            ? slidedown(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideup"
            ? slideup(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideleft"
            ? slideleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideright"
            ? slideright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedownleft"
            ? slidedownleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slidedownright"
            ? slidedownright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideupleft"
            ? slideupleft(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }

        ${
          animation === "slideupright"
            ? slideupright(index, imageIndex, stanzaDuration, oneIndexPercent)
            : ""
        }
      `}</style>
      <div
        id={`stanza${index}Image${imageIndex}`}
        className="ScrollAnimation-StanzaImage-Container"
        style={{
          right: { left: "45%", center: "25%", right: "5%" }[positionX],
          top: { top: "5%", center: "30%", bottom: "55%" }[positionY],
        }}
      >
        <img
          src={
            {
              "Blue Flowers": BlueFlowers,
              "Cave Entrance": CaveEntrance,
              "Cherry Pie": CherryPie,
              "Constellation 1": Constellation1,
              Kite: Kite,
              Ramen: Ramen,
              Town: Town,
              Treasure: Treasure,
              Mountain: Mountain,
              Sun: Sun,
            }[children]
          }
          alt={children}
        />
      </div>
    </div>
  );
}
