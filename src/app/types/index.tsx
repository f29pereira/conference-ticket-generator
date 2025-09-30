/**
 * Props for the Pattern component
 * @property img          - pattern image path
 * @property imgStyling   - pattern image css styling class
 */
export type PatternProps = {
  imgPath: string;
  imgStyling: string;
};

/**
 * FormError Type
 * @property avatar   - avatar field error
 * @property fullName - full name field error
 * @property email    - email field error
 * @property gitHub   - GitHub username field error
 */
export type FormError = {
  avatar: string;
  fullName: string;
  email: string;
  gitHub: string;
};

/**
 * InputMessage Props
 * @property isError - is error message
 * @property message - message
 */
export type InputMessageProps = {
  isError: boolean;
  message: string;
};
