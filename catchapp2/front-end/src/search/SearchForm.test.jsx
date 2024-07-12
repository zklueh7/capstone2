import React from "react";
import SearchForm from "./SearchForm";
import { render } from "@testing-library/react";

it("renders without crashing", function() {
    render(<SearchForm />);
})