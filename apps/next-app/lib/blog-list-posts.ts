import { getStaticBlogPosts } from "./static-blog-posts";

export type BlogListPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  coverImage?: string | null;
  publishedAt?: Date | string | null;
  authorName?: string | null;
};

type GetBlogListPostsOptions = {
  loadDatabasePosts: () => Promise<BlogListPost[]>;
  onDatabaseError?: (error: unknown) => void;
};

export async function getBlogListPosts({
  loadDatabasePosts,
  onDatabaseError = (error) => console.warn("[blog] Failed to load database blog posts:", error),
}: GetBlogListPostsOptions): Promise<BlogListPost[]> {
  let databasePosts: BlogListPost[] = [];

  try {
    databasePosts = await loadDatabasePosts();
  } catch (error) {
    onDatabaseError(error);
  }

  return [
    ...getStaticBlogPosts().map((post) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      publishedAt: post.publishedAt,
      authorName: post.authorName,
    })),
    ...databasePosts,
  ].sort((left, right) => {
    const leftTime = left.publishedAt ? new Date(left.publishedAt).getTime() : 0;
    const rightTime = right.publishedAt ? new Date(right.publishedAt).getTime() : 0;
    return rightTime - leftTime;
  });
}

export function paginateBlogPosts(posts: BlogListPost[], page: number, pageSize: number) {
  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const offset = (page - 1) * pageSize;

  return {
    total,
    totalPages,
    paginatedPosts: posts.slice(offset, offset + pageSize),
  };
}
