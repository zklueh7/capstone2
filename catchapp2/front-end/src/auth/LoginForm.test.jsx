import React from "react";
import LoginForm from "./LoginForm";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<LoginForm />);
})