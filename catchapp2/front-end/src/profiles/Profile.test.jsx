import React from "react";
import Profile from "./Profile";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<Profile />);
})