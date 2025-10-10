import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
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
  it("renders the form, allows user input, and submits successfully", () => {
    render(
      <TicketProvider>
        <Form />
      </TicketProvider>
    );

    const mainHeader = screen.getByRole("heading", { level: 1 });
    const formDescription = screen.getByText(
      /secure your spot at next year's biggest coding conference/i
    );

    //inputs
    const avatar = screen.getByLabelText(/upload avatar/i);
    const avatarContainer = screen.getByTestId("avatar-container"); //avatar image upload custom container
    const fullName = screen.getByLabelText(/full name/i);
    const emailAddress = screen.getByLabelText(/email address/i);
    const gitHubUsername = screen.getByLabelText(/gitHub username/i);

    const submitButton = screen.getByRole("button", {
      name: "Generate My Ticket",
    });

    //Check elements existence
    expect(mainHeader).toBeInTheDocument();
    expect(formDescription).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatarContainer).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(emailAddress).toBeInTheDocument();
    expect(gitHubUsername).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    const file = new File(["data"], "avatar.png", {
      type: "image/png",
    });

    //Fill form data
    fireEvent.change(avatar, { target: { files: [file] } });
    fireEvent.change(fullName, { target: { value: "Jonathan Kristof" } });
    fireEvent.change(emailAddress, { target: { value: "jonathan@email.com" } });
    fireEvent.change(gitHubUsername, {
      target: { value: "@john-doe" },
    });

    //Check form field values
    expect((avatar as HTMLInputElement).files?.[0].name).toBe("avatar.png");
    expect(fullName).toHaveValue("Jonathan Kristof");
    expect(emailAddress).toHaveValue("jonathan@email.com");
    expect(gitHubUsername).toHaveValue("@john-doe");

    //submit form
    fireEvent.click(submitButton);
  });
});
