import type { FormError } from "../types";

/**
 * Validates the form inputs and returns FormError object for the invalid fields
 */
export const validateFormInputs = (
  avatar: FormDataEntryValue | null,
  fullName: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  gitHub: FormDataEntryValue | null
) => {
  const newErrors: FormError = {
    avatar: "",
    fullName: "",
    email: "",
    gitHub: "",
  };

  if (isFile(avatar)) {
    newErrors.avatar = validateFile(avatar);
  }

  if (isString(fullName)) {
    newErrors.fullName = validateFullName(fullName);
  }

  if (isString(email) && isStringEmpty(email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (isString(gitHub)) {
    newErrors.gitHub = validateGitHubUserName(gitHub);
  }

  return newErrors;
};

/**
 * Checks if all error object attributes are empty
 */
export const isErrorObjectEmpty = (errorObj: FormError): boolean => {
  return Object.values(errorObj).every((e) => e === "");
};

/**
 * Checks if FormDataEntry is of type File
 */
const isFile = (file: FormDataEntryValue | null): file is File => {
  return file instanceof File;
};

/**
 * Validates the file and returns error message if invalid
 *
 * Valid if:
 * - file ins´t empty
 * - file type is JPG or PNG
 * - file ins´t above 500KB
 */
const validateFile = (file: File): string => {
  if (isFileEmpty(file)) {
    return "Please upload your photo (JPG or PNG, max size: 500KB).";
  }

  if (!isFileFormatValid(file)) {
    return "Invalid photo type (JPG or PNG, max size: 500KB).";
  }

  if (isFileLarge(file)) {
    return "Photo too large. Please upload a photo under 500KB.";
  }

  return "";
};

/**
 * Validates the user full name input value and returns error message if invalid
 *
 * Valid if:
 * - full name ins´t empty
 * - full name only has letters or spaces
 */
const validateFullName = (fullName: string): string => {
  if (isStringEmpty(fullName)) {
    return "Please enter a valid name";
  }

  if (!isFullNameValid(fullName)) {
    return "Please enter a valid name (letters and spaces only)";
  }

  return "";
};

/**
 * Validates the gitHub username input value and returns error message if invalid
 *
 * Valid if
 * - gitHub username ins´t empty
 * - gitHub username starts with: @ followed by 1–39 lowercase letters/numbers, hyphens allowed (not at start/end or doubled)
 */
const validateGitHubUserName = (gitHubUserName: string): string => {
  if (isStringEmpty(gitHubUserName)) {
    return "Please enter a valid GitHub username";
  }

  if (!isGitHubUserNameValid(gitHubUserName)) {
    return "Please follow GitHub username rules: Starts with @, 1–39 lowercase letters/numbers, hyphens allowed (not at start/end or doubled)";
  }

  return "";
};

/**
 * Checks if FormDataEntry is of type string
 */
const isString = (strValue: FormDataEntryValue | null): strValue is string => {
  return typeof strValue === "string";
};

/**
 * Checks if file is empty
 */
const isFileEmpty = (file: File): boolean => {
  return file.size === 0;
};

/**
 * Checks if file is JPG or PNG format
 */
const isFileFormatValid = (file: File): boolean => {
  const allowedFileTypes = ["image/png", "image/jpeg"];

  return allowedFileTypes.includes(file.type);
};

/**
 * Checks if file is bigger than 500KB
 */
const isFileLarge = (file: File): boolean => {
  return file.size > 500 * 1024;
};

/**
 * Checks if string is empty
 */
const isStringEmpty = (strValue: string): boolean => {
  return strValue === "";
};

/**
 * Validates user full name input value
 *
 * Valid if:
 * - only contains letter characters or spaces
 */
const isFullNameValid = (fullName: string): boolean => {
  const regex = /^[A-Za-z\s]+$/;

  return regex.test(fullName);
};

/**
 * Validates gitHub username input value
 *
 * Valid if:
 * - starts with @ symbol followed by letter (lowercase) or digit: ^@[a-z0-9]
 * - middle chars (max of 38):
 * - lowercase letter or digit: [a-z0-9]
 * - or hyphen followed by letter (lowercase) or digit: |-(?=[a-z0-9])
 * - ends with letter (lowercase) or digit: [a-z0-9]
 */
const isGitHubUserNameValid = (gitHubUserName: string): boolean => {
  const regex = /^@[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){0,38}[a-z0-9]?$/;

  return regex.test(gitHubUserName);
};
