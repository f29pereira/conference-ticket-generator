import { useContext } from "react";
import { TicketContext } from "../providers/TicketProvider";

/**
 * Custom Hook: allows access to TicketContext
 */
export function useTicket() {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("useTicket must be used inside TicketProvider");
  }

  return context;
}
