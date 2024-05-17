import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPageHeader from "@/app/components/home/landingPageHeading";

describe("landing page", () => {
  it("should render heading and subtext properly", () => {
    render(<LandingPageHeader />);
    const heading = screen.getByRole("heading");
    const subText = screen.getByRole("paragraph");
    expect(heading).toHaveTextContent("Github users API");
    expect(subText).toHaveTextContent(
      "Discover public Github repositories simply by entering a username below."
    );
  });
});

