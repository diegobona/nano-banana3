import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { en } from "../../../libs/i18n/locales/en";

describe("Next pricing copy", () => {
  const pricingSource = readFileSync(
    join(process.cwd(), "apps", "next-app", "app", "[lang]", "(root)", "pricing", "page.tsx"),
    "utf8",
  );

  it("uses NanoBanana image-generation positioning instead of 3D workflow copy", () => {
    expect(en.pricing.metadata.title).toBe("NanoBanana Pricing - Credits for AI Image Generation");
    expect(en.pricing.metadata.description).toBe(
      "Choose NanoBanana credits for prompt-based image generation, reference-image workflows, queue priority, and private image history.",
    );
    expect(en.pricing.subtitle).toBe("Choose the credits plan that fits your AI image workflow.");
    expect(pricingSource).toContain("t.pricing.subtitle");
    expect(pricingSource).not.toContain("Choose the credits plan that fits your 3D workflow.");
  });
});
