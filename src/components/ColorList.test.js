import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as fakeFetchColors} from './fetchColors'
jest.mock('./fetchColors')

const fakeColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  }
]

test("Renders BubblePage without errors", () => {
    
  render(<BubblePage/>);

});

test("Fetches data and renders the bubbles on mounting", async () => {
    render(<BubblePage/>)
  fakeFetchColors.mockResolvedValueOnce(fakeColors)

});