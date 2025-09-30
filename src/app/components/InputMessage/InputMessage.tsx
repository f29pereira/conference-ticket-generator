import styles from "./InputMessage.module.css";
import type { InputMessageProps } from "@/app/types";
import Image from "next/image";

/**
 * Renders (info or error) message with:
 * - info icon
 * - message text
 *
 * Props are defined in {@link InputMessageProps}.
 */
export default function InputMessage({ isError, message }: InputMessageProps) {
  return (
    <div
      className={`${styles.msgCont} ${
        isError ? styles.errorMsg : styles.infoMsg
      }`}
      aria-live={isError ? "assertive" : "polite"}
    >
      {/*Info Icon svg*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        className={styles.msgIcon}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
        />
        <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.004 10.462V7.596M8 5.569v-.042"
        />
      </svg>

      {/*Message*/}
      <span className={styles.text}>{message}</span>
    </div>
  );
}
