import { describe, expect, it, vi } from "vitest";

import { getBlogListPosts } from "../../../apps/next-app/lib/blog-list-posts";

describe("blog list posts", () => {
  it("keeps static blog posts visible when database loading fails", async () => {
    const warn = vi.fn();

    const posts = await getBlogListPosts({
      loadDatabasePosts: async () => {
        throw new Error("database unavailable");
      },
      onDatabaseError: warn,
    });

    expect(posts.map((post) => post.slug)).toEqual(["nano-banana-ai-image-generator"]);
    expect(warn).toHaveBeenCalledOnce();
  });
});
