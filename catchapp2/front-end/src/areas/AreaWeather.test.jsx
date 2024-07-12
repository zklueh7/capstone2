import React from "react";
import AreaWeather from "./AreaWeather";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<AreaWeather />);
})