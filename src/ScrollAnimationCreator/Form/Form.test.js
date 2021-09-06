import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form functions correctly", () => {
  test("renders without error", () => {
    render(<Form story={{}} setStory={() => {}} />);
  });

  describe("Global form options work as expected", () => {
    test("setStory is not called on initialRender", () => {
      const setStory = jest.fn();
      render(<Form story={{}} setStory={setStory} />);
      expect(setStory).not.toHaveBeenCalled();
    });

    test("setStory is called on default background change", async () => {
      const setStory = jest.fn();
      render(<Form story={{}} setStory={setStory} />);
      const input = await screen.findByLabelText("Default Background");
      fireEvent.change(input, { target: { value: "#FF0000" } });
      expect(setStory).toHaveBeenCalled();
    });

    test("setStory is called on card background change", async () => {
      const setStory = jest.fn();
      render(<Form story={{}} setStory={setStory} />);
      const input = await screen.findByLabelText("Card Background");
      fireEvent.change(input, { target: { value: "#FF0000" } });
      expect(setStory).toHaveBeenCalled();
    });

    // Stanza Card Style

    // Font

    // Animation Overlap
  });
});
