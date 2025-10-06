"use client"; //Client component

import { createContext, ReactNode, useState } from "react";
import type { TicketContextType, Ticket } from "@/app/types";
type Props = { children: ReactNode };

export const TicketContext = createContext<TicketContextType | undefined>(
  undefined
);

/**
 * Provides context: TicketContext
 */
export default function TicketProvider({ children }: Props) {
  const [ticket, setTicket] = useState<Ticket | null>(null);

  return (
    <TicketContext.Provider value={{ ticket, setTicket }}>
      {children}
    </TicketContext.Provider>
  );
}
