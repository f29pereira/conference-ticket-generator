"use client"; /*Client Component*/

import { useState } from "react";
import styles from "./Form.module.css";
import Image from "next/image";
import type { FormError } from "@/app/types";
import {
  isFile,
  validateFile,
  isString,
  isStringEmpty,
  isAtSymbolPresent,
} from "@/app/utils/utils";
import InputMessage from "../InputMessage/InputMessage";

/**
 * Renders the generate ticket form with:
 * - Upload avatar field
 * - Full name field
 * - Email address field
 * - GitHub username field
 * - Generate ticket submit button
 */
export default function Form() {
  const [file, setFile] = useState<File | null>(null);

  const [error, setError] = useState<FormError>({
    avatar: "",
    fullName: "",
    email: "",
    gitHub: "",
  });

  /**
   * Updates avatar custom input container with user file
   */
  const updateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      setFile(file);
    }
  };

  /**
   * Submits the form to generate the user ticket
   */
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const avatar = formData.get("avatar");
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const gitHub = formData.get("gitHub");

    const newErrors: FormError = {
      avatar: "",
      fullName: "",
      email: "",
      gitHub: "",
    };

    if (isFile(avatar)) {
      newErrors.avatar = validateFile(avatar);
    }

    if (isString(fullName) && isStringEmpty(fullName)) {
      newErrors.fullName = "Please enter a valid name";
    }

    if (isString(email) && isStringEmpty(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (
      isString(gitHub) &&
      (isStringEmpty(gitHub) || !isAtSymbolPresent(gitHub))
    ) {
      newErrors.gitHub = "Please enter a valid GitHub username";
    }

    setError(newErrors);

    //TO DO - check if newErrors has any error message:
    // if true -> return;
    // false - redirect user to ticket page
  };
  return (
    <div>
      <Image
        src="/images/logo/logo-full.svg"
        alt="Coding Conference Logo"
        width={209}
        height={30}
        className={styles.logoImg}
      />

      <div className={styles.headerCont}>
        <h1 className={styles.title}>
          Your Jorney to Coding Conf 2025 Starts Here!
        </h1>

        <p className={styles.text}>
          Secure your spot at next year&apos;s biggest coding conference.
        </p>
      </div>

      <form className={styles.formCont} onSubmit={submitForm}>
        {/*Upload avatar*/}
        <label htmlFor="avatar" className={styles.label} tabIndex={0}>
          Upload Avatar
          {/*Upload avatar custom input*/}
          <div className={`${styles.avatarCont} ${file ? styles.file : ""}`}>
            {file ? (
              <div className={`flex-center ${styles.fileNameCont}`}>
                {file.name}
              </div>
            ) : (
              <>
                <div className={styles.uploadIconCont}>
                  <Image
                    src="/images/icons/icon-upload.svg"
                    alt=""
                    width={30}
                    height={30}
                    className={styles.uploadIcon}
                  ></Image>
                </div>
                <span className={styles.uploadText}>
                  Drag and drop or click to upload
                </span>
              </>
            )}
          </div>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className={styles.avatarInput}
            onChange={updateFile}
          />
        </label>

        {/*Upload avatar - input messages*/}
        <div className={styles.inputMsgCont}>
          {error?.avatar ? (
            <InputMessage isError={true} message={error.avatar} />
          ) : (
            <InputMessage
              isError={false}
              message="Upload your photo (JPG or PNG, max size: 500KB)."
            />
          )}
        </div>

        {/*Full name*/}
        <label htmlFor="name" className={styles.label}>
          Full name
        </label>
        <input
          type="text"
          id="name"
          name="fullName"
          className={`${styles.input} ${error?.fullName ? styles.error : null}`}
        />

        {/*Full name - error message*/}
        <div className={styles.inputMsgCont}>
          {error?.fullName ? (
            <InputMessage isError={true} message={error.fullName} />
          ) : null}
        </div>

        {/*Email address*/}
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          className={`${styles.input} ${error?.email ? styles.error : null}`}
        />
        {/*Email address - error message*/}
        <div className={styles.inputMsgCont}>
          {error?.email ? (
            <InputMessage isError={true} message={error.email} />
          ) : null}
        </div>

        {/*GitHub username*/}
        <label htmlFor="gitHub" className={styles.label}>
          GitHub Username
        </label>
        <input
          type="text"
          name="gitHub"
          id="gitHub"
          placeholder="@yourusername"
          className={`${styles.input} ${error?.gitHub ? styles.error : null}`}
        />

        {/*GitHub username - error message*/}
        <div className={styles.inputMsgCont}>
          {error?.gitHub ? (
            <InputMessage isError={true} message={error.gitHub} />
          ) : null}
        </div>

        {/*Submit button*/}
        <button className={styles.submitBtn}>Generate My Ticket</button>
      </form>
    </div>
  );
}
