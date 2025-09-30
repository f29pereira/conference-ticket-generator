/**
 * Checks if FormDataEntry is of type File
 */
export const isFile = (file: FormDataEntryValue | null): file is File => {
  return file instanceof File;
};

/**
 * Validates the file and returns error message if invalid
 *
 * Invalid if
 * - file is empty
 * - file is not JPG or PNG
 * - file is above 500KB
 */
export const validateFile = (file: File): string => {
  if (isFileEmpty(file) || isFileFormatInvalid(file)) {
    return "Please upload your photo (JPG or PNG, max size: 500KB).";
  }

  if (isFileLarge(file)) {
    return "File too large. Please upload a photo under 500KB.";
  }

  return "";
};

/**
 * Checks if FormDataEntry is of type string
 */
export const isString = (
  strValue: FormDataEntryValue | null
): strValue is string => {
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
const isFileFormatInvalid = (file: File): boolean => {
  const allowedFileTypes = ["image/png", "image/jpeg"];

  return !allowedFileTypes.includes(file.type);
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
export const isStringEmpty = (strValue: string): boolean => {
  return strValue === "";
};

/**
 * Checks if @ symbol exists in the string
 */
export const isAtSymbolPresent = (strValue: string): boolean => {
  return strValue.includes("@");
};
