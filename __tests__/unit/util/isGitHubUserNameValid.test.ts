import { isGitHubUserNameValid } from "@/app/utils/utils";

/**
 * Tests for the function: isGitHubUserNameValid
 */
describe("isGitHubUserNameValid", () => {
  it("returns false when input is empty string", () => {
    expect(isGitHubUserNameValid("")).toBe(false);
  });

  it("returns false when only '@' is provided", () => {
    expect(isGitHubUserNameValid("@")).toBe(false);
  });

  it("returns false when '@' is missing", () => {
    expect(isGitHubUserNameValid("johndoe")).toBe(false);
  });

  it("returns false when containing uppercase letters", () => {
    expect(isGitHubUserNameValid("@J")).toBe(false);
    expect(isGitHubUserNameValid("@johndoE")).toBe(false);
    expect(isGitHubUserNameValid("@johnDoe")).toBe(false);
  });

  it("returns true when containing lowercase letters", () => {
    expect(isGitHubUserNameValid("@j")).toBe(true);
    expect(isGitHubUserNameValid("@johndoe")).toBe(true);
  });

  it("returns false when containing invalid characters", () => {
    expect(isGitHubUserNameValid("@john_doe")).toBe(false);
    expect(isGitHubUserNameValid("@john.doe")).toBe(false);
    expect(isGitHubUserNameValid("@john$doe")).toBe(false);
  });

  it("returns true when containing numbers", () => {
    expect(isGitHubUserNameValid("@1johndoe")).toBe(true);
    expect(isGitHubUserNameValid("@johndoe1")).toBe(true);
    expect(isGitHubUserNameValid("@john123doe")).toBe(true);
  });

  it("returns false when containing a hyphen at the beginning or end", () => {
    expect(isGitHubUserNameValid("@-j")).toBe(false);
    expect(isGitHubUserNameValid("@j-")).toBe(false);
  });

  it("returns false when containing consecutive hyphens", () => {
    expect(isGitHubUserNameValid("@john--doe")).toBe(false);
  });

  it("returns true when containing single hyphens between letters and/or numbers", () => {
    expect(isGitHubUserNameValid("@john-doe-john")).toBe(true);
    expect(isGitHubUserNameValid("@john-doe-97")).toBe(true);
    expect(isGitHubUserNameValid("@john97-doe8-doe")).toBe(true);
  });

  it("returns true for a 39 characters username", () => {
    expect(
      isGitHubUserNameValid("@johndoejohndoejohndoejohndoejohndoejohn")
    ).toBe(true);
  });

  it("returns false for a 40 characters username", () => {
    expect(
      isGitHubUserNameValid("@johndoejohndoejohndoejohndoejohndoejohnd")
    ).toBe(false);
  });
});
