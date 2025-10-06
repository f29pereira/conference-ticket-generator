# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

- Filled form with user details:

![Filled form](public/images/readme/filled_form.png)

- Form validation messages:

  1. **Upload avatar field**

  - Required

    ![Form avatar field required error message](public/images/readme/error/avatar/required.png)

  - Invalid image type

    ![Form avatar field invalid image type error message](public/images/readme/error/avatar/wrong_type.png)

  - Image bigger than 500KB

    ![Form avatar field invalid image size message](public/images/readme/error/avatar/large_image.png)

  2. **Full name field**

  - Required

    ![Form full name field required error message](public/images/readme/error/fullName/required.png)

  - Invalid

    ![Form full name field invalid error message](public/images/readme/error/fullName/invalid.png)

  3. **Email address field**

  - Required

    ![Form email address field required error message](public/images/readme/error/email/required.png)

  4. **GitHub username field**

  - Required

    ![Form GitHub username field required error message](public/images/readme/error/gitHub/required.png)

  - Invalid

    ![Form GitHub username field invalid error message](public/images/readme/error/gitHub/invalid.png)

- View the optimal layout for the interface depending on their device's screen size:

  1. Mobile layout

  ![Form mobile layout](public/images/readme/layout/form_mobile.png)

  ![Generated ticket mobile layout](public/images/readme/layout/ticket_mobile.png)

  2. Desktop layout

  ![Form desktop layout](public/images/readme/layout/form_desktop.png)

  ![Generated ticket desktop layout](public/images/readme/layout/ticket_desktop.png)

- See hover and focus states for all interactive elements on the page:

  1. Upload Avatar field

  ![Form upload avatar field focus](public/images/readme/focus/avatar.png)

  2. Full name field

  ![Form full name field focus](public/images/readme/focus/full_name.png)

  3. Email field

  ![Form email field focus](public/images/readme/focus/email.png)

  4. GitHub field

  ![Form GitHub field focus](public/images/readme/focus/github.png)

  5. Submit button

  ![Form submit button focus](public/images/readme/focus/button.png)

### Links

- Solution URL: [https://github.com/f29pereira/conference-ticket-generator](https://github.com/f29pereira/conference-ticket-generator)
- Live Site URL: [f29pereira.github.io/conference-ticket-generator/](f29pereira.github.io/conference-ticket-generator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

## Author

- Frontend Mentor - [@f29pereira](https://www.frontendmentor.io/profile/f29pereira)
