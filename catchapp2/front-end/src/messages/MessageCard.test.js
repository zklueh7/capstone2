import React from "react";
import { render } from "@testing-library/react";
import MessageCard from "./MessageCard";
import { UserProvider } from "../testUtils";


it("renders without crashing", function () {
  render(<MessageCard />);

});
