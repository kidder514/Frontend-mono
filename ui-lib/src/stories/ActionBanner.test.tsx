import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ActionBanner } from "./ActionBanner";

// example unit testing

test("component should render", () => {
  render(<ActionBanner />);
  const bannerText = screen.getByText(/this is a banner/i);
  expect(bannerText).toBeTruthy();
});
