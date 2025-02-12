import { NavBar } from "./NavBar";
import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";


test("NavBar renders", () => {
  render(<NavBar />);
});
