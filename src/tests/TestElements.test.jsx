import { render, screen } from "@testing-library/react";
import TestElements from "../components/TestElements";

describe("TestElements", () =>{
  it("renders the headline", () => {
    render(<TestElements />);
    const headline = screen.getByText(/Hello this is test elements/i);
    expect(headline).toBeInTheDocument();
  });
});
