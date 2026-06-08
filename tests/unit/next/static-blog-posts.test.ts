import { describe, expect, it } from "vitest";

import {
  getStaticBlogPostBySlug,
  getStaticBlogPosts,
} from "../../../apps/next-app/lib/static-blog-posts";

describe("static blog posts", () => {
  it("includes a NanoBanana SEO article for AI image generation keywords", () => {
    const post = getStaticBlogPostBySlug("nano-banana-ai-image-generator");

    expect(post).toBeDefined();
    expect(post?.title).toBe("Nano Banana AI Image Generator: Prompt and Reference Image Guide");
    expect(post?.excerpt).toContain("Nano Banana AI image generator");
    expect(post?.excerpt).toContain("reference images");
    expect(post?.authorName).toBe("NanoBanana Team");
    expect(post?.coverImage).toBe("/blog-covers/nano-banana-ai-image-generator.svg");

    const body = post?.sections
      .flatMap((section) => {
        if (section.type === "paragraphs") return [section.heading, ...section.paragraphs];
        if (section.type === "list") return [section.heading, ...section.items];
        return [
          section.heading,
          ...section.items.flatMap((item) => [item.question, item.answer]),
        ];
      })
      .filter(Boolean)
      .join("\n") ?? "";

    expect(body).toContain("Nano Banana AI image generator");
    expect(body).toContain("AI image generator");
    expect(body).toContain("reference image generator");
    expect(body).toContain("prompt-based image generation");
    expect(body).toContain("image-to-image editing");
    expect(body).not.toMatch(/GLB|PBR|3D model|image-to-3D/i);
  });

  it("removes legacy 3D static blog articles from the public blog list", () => {
    const slugs = getStaticBlogPosts().map((post) => post.slug);

    expect(slugs).toEqual(["nano-banana-ai-image-generator"]);
    expect(slugs).not.toContain("image-to-3d-model");
    expect(slugs).not.toContain("ai-3d-model-generator");
    expect(slugs).not.toContain("image-to-glb");
    expect(slugs).not.toContain("image-to-stl");
    expect(slugs).not.toContain("pixal3d-alternative");
  });
});
