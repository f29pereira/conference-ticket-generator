import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TicketProvider from "@/app/components/providers/TicketProvider";
import Form from "@/app/components/Form/Form";
import userEvent from "@testing-library/user-event";

// Mock: Next.js App Router
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    pathname: "/",
  }),
}));

/**
 * Tests for the Form component
 */
describe("Form component", () => {
  let mainHeader: HTMLElement;
  let formDescription: HTMLElement;
  let avatar: HTMLElement;
  let avatarContainer: HTMLElement; // avatar image upload custom container
  let fullName: HTMLElement;
  let emailAddress: HTMLElement;
  let gitHubUsername: HTMLElement;
  let submitButton: HTMLElement;
  let avatarFile: File;

  // Runs before each test
  beforeEach(() => {
    render(
      <TicketProvider>
        <Form />
      </TicketProvider>
    );

    mainHeader = screen.getByRole("heading", { level: 1 });
    formDescription = screen.getByText(
      /secure your spot at next year's biggest coding conference/i
    );

    //Inputs
    avatar = screen.getByLabelText(/upload avatar/i);
    avatarContainer = screen.getByTestId("avatar-container");
    fullName = screen.getByLabelText(/full name/i);
    emailAddress = screen.getByLabelText(/email address/i);
    gitHubUsername = screen.getByLabelText(/gitHub username/i);

    submitButton = screen.getByRole("button", {
      name: "Generate My Ticket",
    });

    avatarFile = new File(["data"], "avatar.png", {
      type: "image/png",
    });
  });

  it("renders all inputs and submit button", () => {
    // Check elements existence
    expect(mainHeader).toBeInTheDocument();
    expect(formDescription).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatarContainer).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(emailAddress).toBeInTheDocument();
    expect(gitHubUsername).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("submits successfully when all inputs are valid", async () => {
    // Fill form data
    await userEvent.upload(avatar, avatarFile);
    await userEvent.type(fullName, "Jonathan Kristof");
    await userEvent.type(emailAddress, "jonathan@email.com");
    await userEvent.type(gitHubUsername, "@john-doe");

    // Check form field values
    expect((avatar as HTMLInputElement).files?.[0].name).toBe("avatar.png");
    expect(fullName).toHaveValue("Jonathan Kristof");
    expect(emailAddress).toHaveValue("jonathan@email.com");
    expect(gitHubUsername).toHaveValue("@john-doe");

    // Submit form
    await userEvent.click(submitButton);
  });

  it("shows required messages when submiting empty inputs", async () => {
    // Submit form
    await userEvent.click(submitButton);

    // Check required field error messages
    expect(
      screen.getByText(
        /Please upload your photo \(JPG or PNG, max size: 500KB\)\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Please enter a valid name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Please enter a valid GitHub username/i)
    ).toBeInTheDocument();
  });

  it("shows error message for the full name field when submiting invalid data", async () => {
    // Fill form data
    await userEvent.upload(avatar, avatarFile);
    await userEvent.type(fullName, "Jonathan 123"); //invalid full name
    await userEvent.type(emailAddress, "jonathan@email.com");
    await userEvent.type(gitHubUsername, "@john-doe");

    // Submit form
    await userEvent.click(submitButton);

    // Check error message
    expect(
      screen.getByText(/Please enter a valid name \(letters and spaces only\)/i)
    ).toBeInTheDocument();
  });

  it("shows error message for the gitHub username field when submiting invalid data", async () => {
    // Fill form data
    await userEvent.upload(avatar, avatarFile);
    await userEvent.type(fullName, "Jonathan Kristof");
    await userEvent.type(emailAddress, "jonathan@email.com");
    await userEvent.type(gitHubUsername, "@"); //invalid gitHub username

    // Submit form
    await userEvent.click(submitButton);

    // Check error message
    expect(
      screen.getByText(
        /Please follow GitHub username rules: Starts with @, 1–39 lowercase letters\/numbers, hyphens allowed \(not at start\/end or doubled\)/i
      )
    ).toBeInTheDocument();
  });
});
