import { isFieldsTypeValid } from "@/app/utils/utils";

/**
 * Tests for the function: isFieldsTypeValid
 */
describe("isFieldsTypeValid", () => {
  it("returns true when all fields types are valid", () => {
    expect(
      isFieldsTypeValid({
        avatar: new File(["data"], "avatar.png", {
          type: "image/png",
        }),
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toBe(true);
  });

  it("returns false when any field type is invalid", () => {
    expect(
      isFieldsTypeValid({
        avatar: null,
        fullName: "John Doe",
        email: "johnDoe@email.com",
        gitHub: "@john-doe",
      })
    ).toBe(false);
  });
});
