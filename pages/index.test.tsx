import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

describe("Home", () => {
  it("should render the heading", async () => {
    render(<Home />);
    const heading = await screen.getByText("Hello");
    expect(heading).toBeInTheDocument();
  });
});
