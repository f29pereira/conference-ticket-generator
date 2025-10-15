"use client"; //Client Component

import styles from "./page.module.css";
import { useTicket } from "../components/hooks/useTicket";
import Image from "next/image";
import Pattern from "../components/Pattern/Pattern";

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

      <p className={styles.text} id="ticketDescription">
        We&apos;ve emailed your ticket to <br />
        <span className={styles.email}>{ticket?.email}</span> and will send
        updates in the run up to the event.
      </p>

      {/*Ticket*/}
      <h2 className="sr-only">Generated User Ticket</h2>
      <div className={styles.ticketCont} aria-describedby="ticketDescription">
        <div className={styles.ticket}>
          <div className={styles.titleCont}>
            {/*Logo*/}
            <Image
              src="images/logo/logo-mark.svg"
              alt=""
              width={40}
              height={40}
              className={styles.logoImg}
            />

            <div className={styles.confIntoCont}>
              <h3 className={styles.codingConfTitle}>Coding Conf</h3>

              {/*Conference date and location*/}
              <p className={styles.confLocationCont}>{ticket?.confInfo}</p>
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
                  src="images/icons/icon-github.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={styles.gitHubIcon}
                />
                <span>{ticket?.gitHub}</span>
              </div>
            </div>
          </div>

          <span className={styles.ticketCode}>#{ticket?.id}</span>
        </div>

        {/*Full circle for mobile/tablet only screens*/}
        <Pattern
          imgPath="images/patterns/pattern-circle.svg"
          imgStyling="circleBottomRight"
        />

        {/*Half right circle for desktop only screens*/}
        <Pattern
          imgPath="images/patterns/pattern-circle.svg"
          imgStyling="circleRightHalf"
        />
      </div>
    </section>
  );
}
