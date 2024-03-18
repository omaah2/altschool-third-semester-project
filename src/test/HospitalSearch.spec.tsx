import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import testing-library's Jest DOM extensions
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import HospitalSearch from "../Components/HospitalSearch";

test("renders HospitalSearch component", () => {
  render(
    <Router>
      <HospitalSearch />
    </Router>
  );
  const searchInput = screen.getByPlaceholderText(
    "Search hospital by name or location..."
  );
  expect(searchInput).toBeInTheDocument();
});


test("navigates to landing page on home button click", () => {
  render(
    <Router>
      <HospitalSearch />
    </Router>
  );
  const homeButton = screen.getByText("Back to Home");
  fireEvent.click(homeButton);

  expect(window.location.pathname).toBe("/");
});

test("automatically selects first search result on enter button click", () => {
  render(
    <Router>
      <HospitalSearch />
    </Router>
  );
  const searchInput = screen.getByPlaceholderText(
    "Search hospital by name or location..."
  );
  fireEvent.change(searchInput, { target: { value: "Hospital" } });
  expect(searchInput).toHaveValue("Hospital");

  const enterButton = screen.getByText("Enter");
  fireEvent.click(enterButton);

  const hospitalDetails = screen.getByText("Hospital Details");
  expect(hospitalDetails).toBeInTheDocument();
});


