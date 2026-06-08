import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { en } from "../../../libs/i18n/locales/en";

describe("Next home SEO copy", () => {
  const pageSource = readFileSync(
    join(process.cwd(), "apps", "next-app", "app", "[lang]", "(root)", "page.tsx"),
    "utf8",
  );
  const layoutSource = readFileSync(
    join(process.cwd(), "apps", "next-app", "app", "[lang]", "layout.tsx"),
    "utf8",
  );

  it("uses the agreed search result metadata", () => {
    expect(en.home.metadata.title).toBe(
      "Nano Banana 3 AI Image Generator – Launch Tracker, Prompts & Free Online Tool",
    );
    expect(en.home.metadata.description).toBe(
      "Nano Banana 3 AI image generator and editor. Track the release, compare Nano Banana 3 vs Nano Banana 2 and Nano Banana Pro, try prompt and reference-image workflows online.",
    );
  });

  it("uses concise hero copy without the old TencentARC trust line", () => {
    expect(en.pixal3d.generator.heroTitle).toBe("Nano Banana 3 AI Image Generator");
    expect(en.pixal3d.generator.subtitle).toBe("Generate polished images from prompts and references");
    expect(pageSource).not.toContain("t.pixal3d.generator.trustLine");
  });

  it("uses the requested trial and paid generation prompts", () => {
    expect(en.pixal3d.generator.trialDescription).toBe(
      "Nano Banana image generation is moving into this workspace. Sign in to save results and use credits.",
    );
    expect(pageSource).toContain('const marker = "15-minute";');
    expect(en.pixal3d.generator.freeTrialButton).toBe("Start Free Trial");
    expect(pageSource).toContain("hover:before:opacity-80");
    expect(pageSource).not.toContain("-&gt;");
    expect(en.pixal3d.generator.errors.generateDisabledSignIn).toBe(
      "Sign in and subscribe for faster and more stable image generation.",
    );
    expect(en.pixal3d.generator.errors.generateDisabledSubscribeRequired).toBe(
      "Subscribe to generate images",
    );
    expect(en.pixal3d.generator.subscribeButton).toBe("Subscribe");
    expect(en.pixal3d.generator.subscribeToGenerateButton).toBe("Subscribe to Generate");
    expect(en.pixal3d.generator.upgradeToGenerateButton).toBe("Upgrade to Generate");
    expect(en.pixal3d.generator.errors.generateDisabledFreeTrialAbove).toBe(
      "Faster and more stable generation, never offline. Free trial is available above.",
    );
  });

  it("emits WebApplication structured data for the Next route", () => {
    expect(layoutSource).toContain('type="application/ld+json"');
    expect(layoutSource).toContain('"@type": "WebApplication"');
    expect(layoutSource).toContain('siteName: \'NanoBanana\'');
    expect(layoutSource).toContain('name: "NanoBanana"');
    expect(layoutSource).not.toContain("https://github.com/TencentARC/Pixal3D");
  });

  it("keeps FAQ copy focused on image generation without adding extra entries", () => {
    expect(Object.keys(en.pixal3d.faq.items)).toHaveLength(4);
    expect(en.pixal3d.faq.items.generator.answer).toBe(
      "Yes. This workspace is being converted into a Nano Banana AI image generator for prompt and reference-image workflows.",
    );
    expect(en.pixal3d.faq.items.oneImage.answer).toBe(
      "Yes. Upload a reference image to guide the generated image, or start from a prompt only in the upcoming backend step.",
    );
    expect(en.pixal3d.faq.items.bestImages.answer).toBe(
      "Clear images with a strong subject, readable lighting, and minimal clutter usually produce better image generations.",
    );
    expect(en.pixal3d.faq.items.formats.question).toBe("Can I download the generated image?");
    expect(en.pixal3d.faq.items.formats.answer).toBe(
      "Yes. Generated images appear inline and can be opened or downloaded from the result view and asset history.",
    );
  });
});
