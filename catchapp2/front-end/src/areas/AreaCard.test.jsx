import React from "react";
import AreaCard from "./AreaCard";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<AreaCard />);
})