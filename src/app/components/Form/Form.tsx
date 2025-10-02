"use client"; /*Client Component*/

import { useState, useRef } from "react";
import styles from "./Form.module.css";
import Image from "next/image";
import type { FormError } from "@/app/types";
import { validateFormInputs, isErrorObjectEmpty } from "@/app/utils/utils";
import InputMessage from "../InputMessage/InputMessage";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

/**
 * Renders the generate ticket form with:
 * - Upload avatar field
 * - Full name field
 * - Email address field
 * - GitHub username field
 * - Generate ticket submit button
 */
export default function Form() {
  //user avatar file state
  const [file, setFile] = useState<File | null>(null);

  //form error messages state
  const [error, setError] = useState<FormError>({
    avatar: "",
    fullName: "",
    email: "",
    gitHub: "",
  });

  //user avatar file input ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Opens choose file pop up when pressing: "Enter" or "Space bar"
   */
  const openChooseFile = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); //prevent scroll when pressing "Space bar"
      fileInputRef.current?.click();
    }
  };

  /**
   * Updates avatar custom input container with user file
   */
  const updateFile = (e: ChangeEvent) => {
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

    const newErrors = validateFormInputs(avatar, fullName, email, gitHub);

    if (!isErrorObjectEmpty(newErrors)) {
      console.log("Error found, enter line 70");
      setError(newErrors); //update error state
    } else {
      //TO DO - redirect user to ticket page
      console.log("FORM is OK, generating ticket...");
    }
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
        <label
          htmlFor="avatar"
          className={styles.label}
          tabIndex={0}
          onKeyDown={openChooseFile}
        >
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
            ref={fileInputRef}
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
          autoComplete="name"
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
          autoComplete="email"
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
        <div className={styles.gitInputMsgCont}>
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
