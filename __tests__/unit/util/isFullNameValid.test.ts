import { isFullNameValid } from "@/app/utils/utils";

/**
 * Tests for the function: isFullNameValid
 */
describe("isFullNameValid", () => {
  it("returns false when input is empty string", () => {
    expect(isFullNameValid("")).toBe(false);
  });

  it("returns false when only spaces are provided", () => {
    expect(isFullNameValid("    ")).toBe(false);
  });

  it("returns false when containing numbers", () => {
    expect(isFullNameValid("John123")).toBe(false);
  });

  it("returns false when containing invalid characters", () => {
    expect(isFullNameValid("John_Doe")).toBe(false);
    expect(isFullNameValid("John.Doe")).toBe(false);
    expect(isFullNameValid("John$Doe")).toBe(false);
  });

  it("returns false when containing accented letters", () => {
    expect(isFullNameValid("Doé")).toBe(false);
  });

  it("returns true when containing lowercase or uppercase character(s) and space(s)", () => {
    expect(isFullNameValid("John")).toBe(true);
    expect(isFullNameValid("JOHN")).toBe(true);
    expect(isFullNameValid("John Doe John")).toBe(true);
    expect(isFullNameValid("JOHN DOE JOHN")).toBe(true);
  });
});
