import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { en } from "../../../libs/i18n/locales/en";

const oldSeoTerms = /Pixal3D|AI 3D|3D model|AI 3D model|image to 3D|image-to-3D|image-to-3d|GLB|PBR|STL/i;

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectStrings);
  }

  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).flatMap(collectStrings);
  }

  return [];
}

describe("SEO branding", () => {
  it("keeps all metadata copy focused on NanoBanana AI image generation", () => {
    const metadataGroups = [
      en.home.metadata,
      en.auth.metadata,
      en.pricing.metadata,
      en.payment.metadata,
      en.blog.metadata,
      en.dashboard.metadata,
    ];

    const metadataCopy = metadataGroups.flatMap(collectStrings).join("\n");

    expect(metadataCopy).toContain("NanoBanana");
    expect(metadataCopy).toContain("AI Image");
    expect(metadataCopy).not.toMatch(oldSeoTerms);
  });

  it("updates adjacent public page descriptions that appear near search-entry pages", () => {
    const publicPageCopy = collectStrings({
      auth: en.auth.signup.description,
      blogSubtitle: en.blog.subtitle,
      dashboardCredits: en.dashboard.credits.description,
      myAssets: en.myAssets,
      docs: en.docs,
    }).join("\n");

    expect(publicPageCopy).toContain("NanoBanana");
    expect(publicPageCopy).toContain("image");
    expect(publicPageCopy).not.toMatch(oldSeoTerms);
  });

  it("uses the NanoBanana custom domain as the sitemap fallback host", () => {
    const sitemapSource = readFileSync(
      join(process.cwd(), "apps", "next-app", "app", "sitemap.ts"),
      "utf8",
    );

    expect(sitemapSource).toContain('const DEFAULT_APP_URL = "https://nano-banana3.art";');
    expect(sitemapSource).not.toContain("https://pixal3d.net");
  });
});
