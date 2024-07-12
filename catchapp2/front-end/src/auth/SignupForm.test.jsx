import React from "react";
import SignupForm from "./SignupForm";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<SignupForm />);
})