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

// Newport Nebraska
import AlaskaFlag from "../../assets/images/AlaskaFlag.svg";
import CaliforniaFlag from "../../assets/images/CaliforniaFlag.svg";
import CitySkyline from "../../assets/images/CitySkyline.svg";
import Corn from "../../assets/images/Corn.svg";
import Grass from "../../assets/images/Grass.svg";
import Surfboard from "../../assets/images/Surfboard.svg";
import Swimsuit from "../../assets/images/Swimsuit.svg";
import Umbrella from "../../assets/images/Umbrella.svg";
import WaveOutline from "../../assets/images/WaveOutline.svg";

// Guide to Sunset
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
import ActionBox from "../../assets/images/ActionBox.svg";
import Bed from "../../assets/images/Bed.svg";
import Constellation2 from "../../assets/images/Constellation2.svg";
import Constellation3 from "../../assets/images/Constellation3.svg";
import FullMoon from "../../assets/images/FullMoon.svg";
import Mountains from "../../assets/images/Mountains.svg";
import MountEverest from "../../assets/images/MountEverest.svg";
import MusicNotes from "../../assets/images/MusicNotes.svg";
import Oak from "../../assets/images/Oak.svg";
import Penny from "../../assets/images/Penny.svg";
import PinkPoodle from "../../assets/images/PinkPoodle.svg";
import Shrub1 from "../../assets/images/Shrub1.svg";
import Shrub2 from "../../assets/images/Shrub2.svg";

/**
 * NOTE: This is different than the one in the Bedtime project!
 *
 *
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
              // Newport Nebraska
              "Alaska Flag": AlaskaFlag,
              "California Flag": CaliforniaFlag,
              "City Skyline": CitySkyline,
              Corn: Corn,
              Grass: Grass,
              Surfboard: Surfboard,
              Swimsuit: Swimsuit,
              Umbrella: Umbrella,
              "Wave Outline": WaveOutline,
              // Guide to Sunset
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
              "Action Box": ActionBox,
              Bed: Bed,
              "Constellation 2": Constellation2,
              "Constellation 3": Constellation3,
              "Full Moon": FullMoon,
              Mountains: Mountains,
              "Mount Everest": MountEverest,
              "Music Notes": MusicNotes,
              Oak: Oak,
              Penny: Penny,
              "Pink Poodle": PinkPoodle,
              "Shrub 1": Shrub1,
              "Shrub 2": Shrub2,
            }[children]
          }
          alt={children}
        />
      </div>
    </div>
  );
}
