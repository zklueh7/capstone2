import React from "react";
import AreaHome from "./AreaHome";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<AreaHome />);
})