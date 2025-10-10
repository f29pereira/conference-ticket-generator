import { isErrorObjectEmpty } from "@/app/utils/utils";

/**
 * Tests for the function: isErrorObjectEmpty
 */
describe("isErrorObjectEmpty", () => {
  it("returns true when all attributes are empty strings", () => {
    expect(
      isErrorObjectEmpty({ avatar: "", fullName: "", email: "", gitHub: "" })
    ).toBe(true);
  });

  it("returns false when at least one attribute is not empty string", () => {
    expect(
      isErrorObjectEmpty({
        avatar: "Photo too large. Please upload a photo under 500KB.",
        fullName: "",
        email: "",
        gitHub: "",
      })
    ).toBe(false);
  });
});
