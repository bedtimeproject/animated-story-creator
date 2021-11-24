// @ts-check
/**
 * @function slidedown
 * @description Returns a string for a keyframes slide down animation with the
 * appropriate timing based on the image's placement in the story.
 * @author Alexander Burdiss
 * @since 7/10/21
 * @version 1.1.0
 * @param {number} index
 * @param {number} imageIndex
 * @param {number} stanzaDuration
 * @param {number} oneIndexPercent
 * @param {string} animationOverlap
 * @returns {string} A Keyframes animation that needs to be placed inside a
 * <style> tag
 */
export function slidedown(
  index,
  imageIndex,
  stanzaDuration,
  oneIndexPercent,
  animationOverlap
) {
  const indexModifiers = animationOverlap === "true" ? [0.5, 1] : [0.25, 0.5];

  return `@keyframes stanza${index}slidedown${imageIndex} {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    ${
      index > 0
        ? `${(index - indexModifiers[0]) * oneIndexPercent}% {
        opacity: 0;
        transform: translateY(0);
      }`
        : ""
    }
    ${index * oneIndexPercent}% {
      opacity: 1;
      transform: translateY(50px);
    }
    ${(index + indexModifiers[0] * stanzaDuration) * oneIndexPercent}% {
      opacity: 1;
      transform: translateY(125px);
    }
    ${(index + indexModifiers[1] * stanzaDuration) * oneIndexPercent}% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 0;
      transform: translateY(200px);
    }
  }`;
}
