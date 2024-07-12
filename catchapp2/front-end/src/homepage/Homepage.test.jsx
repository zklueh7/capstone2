import React from "react";
import Homepage from "./Homepage";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<Homepage />);
})