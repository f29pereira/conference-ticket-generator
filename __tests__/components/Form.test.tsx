import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TicketProvider from "@/app/components/providers/TicketProvider";
import Form from "@/app/components/Form/Form";

//Mock: Next.js App Router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

/**
 * Tests for the Form component
 */
describe("Form", () => {
  it("renders the form with heading, description, and all inputs", () => {
    render(
      <TicketProvider>
        <Form />
      </TicketProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument(); //h1
    expect(
      screen.getByText(
        /secure your spot at next year's biggest coding conference/i
      )
    ); //paragraph

    //labels and inputs
    expect(screen.getByLabelText(/upload avatar/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gitHub username/i)).toBeInTheDocument();
  });
});
