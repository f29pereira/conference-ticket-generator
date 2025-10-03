"use client"; //Client Component

import styles from "./page.module.css";
import { useTicket } from "../components/hooks/useTicket";
import Image from "next/image";

/**
 * Renders a conference ticket page with:
 * - Title with user full name and text with user email
 * - Ticket with: conference date/location, user avatar image, user full name and GitHub username
 */
export default function Ticket() {
  const { ticket } = useTicket();

  return (
    <section>
      <h1 className={styles.title}>
        Congrats,
        <span className={styles.nameGradient}>{ticket?.fullName}!</span> Your
        ticket is ready.
      </h1>

      <p className={styles.text}>
        We&apos;ve emailed your ticket to
        <span className={styles.email}>{ticket?.email}</span> and will send
        updates in the run up to the event.
      </p>

      {/*Ticket*/}

      {/*TO DO - Add Accessibility title for the ticket*/}

      <div className={styles.ticketCont}>
        <div className={styles.ticket}>
          <div className={styles.titleCont}>
            {/*Logo*/}
            <Image
              src="/images/logo/logo-mark.svg"
              alt=""
              width={40}
              height={40}
              className={styles.logoImg}
            />

            <div className={styles.confIntoCont}>
              <h2>Coding Conf</h2>

              {/*Conference date and location*/}
              <p className={styles.confLocationCont}>
                {ticket?.creationDate}
                <span>/</span>
                {ticket?.confLocation}
              </p>
            </div>
          </div>

          {/*User Information*/}
          <div className={styles.userInfoCont}>
            {/*User avatar image*/}
            <img
              src={ticket?.avatar}
              alt="User ticket avatar"
              className={styles.avatar}
            />

            <div>
              {/*User name*/}
              <div className={styles.fullNameCont}>
                <span>{ticket?.fullName}</span>
              </div>

              {/*GitHub username*/}
              <div className={styles.gitHubCont}>
                <Image
                  src="/images/icons/icon-github.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>{ticket?.gitHub}</span>
              </div>
            </div>
          </div>

          <span className={styles.ticketCode}>#016009</span>
        </div>
      </div>
    </section>
  );
}
