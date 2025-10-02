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
 * Type for unvalidated form input value types
 * @property avatar   - avatar field
 * @property fullName - full name field
 * @property email    - email field
 * @property gitHub   - GitHub username field
 */
export type UnvalidatedFieldsTypes = {
  avatar: FormDataEntryValue | null;
  fullName: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  gitHub: FormDataEntryValue | null;
};

/**
 * Type for valid form input value types
 * @property avatar   - avatar field
 * @property fullName - full name field
 * @property email    - email field
 * @property gitHub   - GitHub username field
 */
export type ValidatedFieldsTypes = {
  avatar: File;
  fullName: string;
  email: string;
  gitHub: string;
};

/**
 * FormError Type
 * @property avatar   - avatar field message error
 * @property fullName - full name field message error
 * @property email    - email field message error
 * @property gitHub   - GitHub username field message error
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

/**
 * Ticket Type
 * @property creationDate - ticket creation date
 * @property confLocation - conference location
 * @property avatar - user avatar
 * @property fullName - user full name
 * @property email - user email
 * @property gitHub - user GitHub
 */
export type Ticket = {
  creationDate: string;
  confLocation: string;
  avatar: string;
  fullName: string;
  email: string;
  gitHub: string;
};

/**
 * TicketContext Type
 * @property ticket - user ticket
 * @property setTicket - ticket setter function
 */
export type TicketContextType = {
  ticket: Ticket | null;
  setTicket: React.Dispatch<React.SetStateAction<Ticket | null>>;
};
