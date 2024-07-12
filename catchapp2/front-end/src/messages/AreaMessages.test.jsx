import React from "react";
import AreaMessages from "./AreaMessages";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<AreaMessages />);
})