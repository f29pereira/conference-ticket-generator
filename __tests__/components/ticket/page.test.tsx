import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TicketProvider from "@/app/components/providers/TicketProvider";
import Ticket from "@/app/ticket/page";

const mockTicket = {
  id: "016009",
  confInfo: "Jan 31, 2025 / Austin, TX",
  avatar: "avatar",
  fullName: "Jonathan Kristof",
  email: "jonathan@email.com",
  gitHub: "@jonathankristof101",
};

// Mock: useTicket
jest.mock("@/app/components/hooks/useTicket", () => ({
  useTicket: () => ({ ticket: mockTicket }),
}));

/**
 * Tests for the Ticket component
 */
describe("Ticket component", () => {
  // Runs before each test
  beforeEach(() => {
    render(
      <TicketProvider>
        <Ticket />
      </TicketProvider>
    );
  });

  it("renders main title and description", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: /Congrats,/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We've emailed your ticket to/i)
    ).toBeInTheDocument();
  });

  it("renders conference info and ticket id", () => {
    expect(screen.getByText(mockTicket.confInfo)).toBeInTheDocument();
    expect(screen.getByText(`#${mockTicket.id}`)).toBeInTheDocument();
  });

  it("renders ticket accessibility title", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: /Coding Conf/i })
    ).toBeInTheDocument(); //h2
  });

  it("renders user information", () => {
    expect(screen.getByText(mockTicket.email)).toBeInTheDocument();
    expect(screen.getByText(mockTicket.fullName)).toBeInTheDocument();
    expect(screen.getByText(mockTicket.gitHub)).toBeInTheDocument();
  });
});
