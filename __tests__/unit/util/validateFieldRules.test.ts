import { validateFieldsRules } from "@/app/utils/utils";

/**
 * Tests for function: validateFieldsRules
 */
describe("validateFieldsRules", () => {
  it("returns object with no errors when all fields are valid", () => {
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toEqual({ avatar: "", fullName: "", email: "", gitHub: "" });
  });

  it("returns object with error message for the invalid fields", () => {
    //empty avatar image
    expect(
      validateFieldsRules({
        avatar: new File([], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toEqual({
      avatar: "Please upload your photo (JPG or PNG, max size: 500KB).",
      fullName: "",
      email: "",
      gitHub: "",
    });

    //invalid avatar image type
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.webp", {
          type: "image/webp", //only valid png or jpeg
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toEqual({
      avatar: "Invalid photo type (JPG or PNG, max size: 500KB).",
      fullName: "",
      email: "",
      gitHub: "",
    });

    //empty full name
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toEqual({
      avatar: "",
      fullName: "Please enter a valid name",
      email: "",
      gitHub: "",
    });

    //invalid full name
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "1jonh2", //numbers not allowed
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toEqual({
      avatar: "",
      fullName: "Please enter a valid name (letters and spaces only)",
      email: "",
      gitHub: "",
    });

    //empty email
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "",
        gitHub: "@john-doe",
      })
    ).toEqual({
      avatar: "",
      fullName: "",
      email: "Please enter a valid email",
      gitHub: "",
    });

    //empty gitHub username
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "",
      })
    ).toEqual({
      avatar: "",
      fullName: "",
      email: "",
      gitHub: "Please enter a valid GitHub username",
    });

    //invalid gitHub username
    expect(
      validateFieldsRules({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "john-doe", //missing "@"
      })
    ).toEqual({
      avatar: "",
      fullName: "",
      email: "",
      gitHub:
        "Please follow GitHub username rules: Starts with @, 1–39 lowercase letters/numbers, hyphens allowed (not at start/end or doubled)",
    });
  });
});
