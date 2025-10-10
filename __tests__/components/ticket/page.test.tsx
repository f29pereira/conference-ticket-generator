import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TicketProvider from "@/app/components/providers/TicketProvider";
import Ticket from "@/app/ticket/page";

//Mock: useTicket
jest.mock("@/app/components/hooks/useTicket", () => ({
  useTicket: () => ({
    ticket: {
      id: "016009",
      confInfo: "Jan 31, 2025 / Austin, TX",
      avatar: "avatar",
      fullName: "Jonathan Kristof",
      email: "jonathan@email.com",
      gitHub: "@jonathankristof101",
    },
  }),
}));

/**
 * Tests for the Ticket component
 */
describe("Ticket", () => {
  it("renders ticket with", () => {
    render(
      <TicketProvider>
        <Ticket />
      </TicketProvider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument(); //h1

    //TO DO - finnish unit test
  });
});
