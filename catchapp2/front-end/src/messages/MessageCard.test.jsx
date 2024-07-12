import React from "react";
import MessageCard from "./MessageCard";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<MessageCard />);
})