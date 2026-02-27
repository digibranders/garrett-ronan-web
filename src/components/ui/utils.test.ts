import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("merges simple strings", () => {
    expect(cn("base-class", "extra-class")).toBe("base-class extra-class");
  });

  it("handles conditional classes", () => {
    expect(cn("base-class", true && "conditional-class")).toBe(
      "base-class conditional-class"
    );
    expect(cn("base-class", false && "conditional-class")).toBe("base-class");
  });

  it("handles objects of classes", () => {
    expect(
      cn({ "class-one": true, "class-two": false, "class-three": true })
    ).toBe("class-one class-three");
  });

  it("handles arrays of classes", () => {
    expect(cn(["class-one", "class-two"])).toBe("class-one class-two");
    expect(cn(["class-one", ["class-two", "class-three"]])).toBe(
      "class-one class-two class-three"
    );
  });

  it("handles falsy values", () => {
    expect(cn("base", null, undefined, false, 0, "")).toBe("base");
  });

  it("correctly merges tailwind classes", () => {
    // Basic tailwind merge
    expect(cn("px-2", "px-4")).toBe("px-4");
    // Mixed tailwind merge
    expect(cn("p-4 text-red-500", "p-2")).toBe("text-red-500 p-2");
    // Conflicting background colors
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });

  it("handles complex combinations", () => {
    const isActive = true;
    const isError = false;
    expect(
      cn(
        "base-styles",
        isActive && "active-styles",
        isError ? "error-styles" : "no-error",
        ["nested-1", "nested-2"],
        { "obj-style": true }
      )
    ).toBe("base-styles active-styles no-error nested-1 nested-2 obj-style");
  });
});
