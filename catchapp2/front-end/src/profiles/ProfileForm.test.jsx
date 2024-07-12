import React from "react";
import ProfileForm from "./ProfileForm";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<ProfileForm />);
})