import styles from "./Form.module.css";
import Image from "next/image";

/**
 * Renders the generate ticket form with:
 * - Upload avatar field
 * - Full name field
 * - Email address field
 * - GitHub username field
 * - Generate ticket submit button
 */
export default function Form() {
  return (
    <div>
      <Image
        src="/images/logo/logo-full.svg"
        alt="Codind Conf Logo"
        width={209}
        height={30}
        className={styles.logoImg}
      ></Image>

      <div className={styles.headerCont}>
        <h1 className={styles.title}>
          Your Jorney to Coding Conf 2025 Starts Here!
        </h1>

        <p className={styles.text}>
          Secure your spot at next year&apos;s biggest coding conference.
        </p>
      </div>

      <form action="" className={styles.formCont}>
        {/*Upload avatar*/}
        <label htmlFor="avatar" className={styles.label} tabIndex={0}>
          Upload Avatar
          {/*Upload avatar custom input*/}
          <div className={styles.avatarCont}>
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
          </div>
          <input type="file" id="avatar" className={styles.avatarInput} />
        </label>

        {/*Avatar info*/}
        <div className={styles.avatarInfoCont}>
          <Image
            src="/images/icons/icon-info.svg"
            alt=""
            width={16}
            height={16}
            className={styles.infoIcon}
          ></Image>
          <span className={styles.infoText}>
            Upload your photo (JPG or PNG, max size: 500KB).
          </span>
        </div>

        {/*Full name*/}
        <label htmlFor="name" className={styles.label}>
          Full name
        </label>
        <input type="text" id="name" className={styles.input} />

        {/*Email address*/}
        <label htmlFor="email" className={styles.label}>
          Email Address
        </label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="example@email.com"
          className={styles.input}
        />

        {/*GitHub username*/}
        <label htmlFor="gihub" className={styles.label}>
          GitHub Username
        </label>
        <input
          type="text"
          id="gihub"
          placeholder="@yourusername"
          className={styles.input}
        />

        {/*Submit button*/}
        <button className={styles.submitBtn}>Generate My Ticket</button>
      </form>
    </div>
  );
}
