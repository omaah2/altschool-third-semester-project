import { test } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import HospitalForm from "../Components/HospitalForm/HospitalForm"; 

test("renders HospitalForm component", () => {
  render(<HospitalForm />);
});

test("adds new hospital", async () => {
  render(<HospitalForm />);

  // Simulate user input and submit the form
  act(() => {
    fireEvent.change(screen.getByLabelText("Hospital Name:"), {
      target: { value: "Hospital Test" },
    });
    fireEvent.change(screen.getByLabelText("Address:"), {
      target: { value: "Test Address" },
    });
    fireEvent.change(screen.getByLabelText("Contact:"), {
      target: { value: "1234567890" },
    });
  });
});

test("uploads image", async () => {
  render(<HospitalForm />);

  // Simulate user input and submit the form
  act(() => {
    const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" });
    const input = screen.getByLabelText("Upload Image:");
    Object.defineProperty(input, "files", {
      value: [file],
    });
    fireEvent.change(input);
  });
});
