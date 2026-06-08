export type StaticBlogFaqItem = {
  question: string;
  answer: string;
};

export type StaticBlogSection =
  | {
      type: "paragraphs";
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: "list";
      heading: string;
      items: string[];
    }
  | {
      type: "faq";
      heading: string;
      items: StaticBlogFaqItem[];
    };

export type StaticBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  authorName: string;
  publishedAt: string;
  sections: StaticBlogSection[];
};

const NANO_BANANA_AUTHOR = "NanoBanana Team";
const NANO_BANANA_PUBLISHED_AT = "2026-06-08T00:00:00.000Z";

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  {
    id: "static-nano-banana-ai-image-generator",
    slug: "nano-banana-ai-image-generator",
    title: "Nano Banana AI Image Generator: Prompt and Reference Image Guide",
    excerpt:
      "Learn how to use a Nano Banana AI image generator with prompts, reference images, aspect ratios, and image-to-image editing workflows.",
    coverImage: "/blog-covers/nano-banana-ai-image-generator.svg",
    authorName: NANO_BANANA_AUTHOR,
    publishedAt: NANO_BANANA_PUBLISHED_AT,
    sections: [
      {
        type: "paragraphs",
        paragraphs: [
          "A Nano Banana AI image generator helps creators turn short prompts and optional reference images into polished visual concepts. Instead of starting from a blank canvas every time, you can guide the result with subject details, composition notes, style direction, and example images.",
          "This guide is written for people searching for an AI image generator that supports prompt-based image generation, reference image workflows, and practical image-to-image editing. The goal is simple: create better images with fewer random retries.",
        ],
      },
      {
        type: "paragraphs",
        heading: "What is a Nano Banana AI image generator?",
        paragraphs: [
          "A Nano Banana AI image generator is a workspace for creating or editing images from text prompts and visual references. The prompt explains what should appear in the final image, while a reference image can guide character identity, product shape, color palette, layout, or mood.",
          "This makes Nano Banana useful for social media visuals, product mockups, ad concepts, thumbnails, character ideas, and brand exploration. It is especially helpful when you already have a rough image but want a cleaner, more complete, or more styled result.",
          "For SEO and product discovery, the important search intent is not only 'AI image generator'. Many users are also looking for a reference image generator, AI image editor, prompt image generator, or image-to-image editing tool. A good workflow should support all of those related needs.",
        ],
      },
      {
        type: "paragraphs",
        heading: "Prompt plus reference image is the strongest workflow",
        paragraphs: [
          "Prompt-only generation is fast, but it can be too open-ended. Reference images make the result more controllable because they show the model what matters visually. You can upload a product photo, a character sketch, a room layout, or a style reference, then describe how the generated image should change.",
          "For example, a prompt can ask for a premium product banner, but the reference image can preserve the actual product angle. A prompt can request a cinematic portrait, but the reference image can keep the same face direction, outfit shape, or color relationship.",
          "The best results usually come from using both: a concise prompt for intent and one or more reference images for visual grounding.",
        ],
      },
      {
        type: "list",
        heading: "SEO keyword targets for this workflow",
        items: [
          "Nano Banana AI image generator",
          "AI image generator with reference image",
          "reference image generator",
          "prompt-based image generation",
          "image-to-image editing",
          "AI image editor for product visuals",
          "AI image workflow for creators",
        ],
      },
      {
        type: "list",
        heading: "Prompt checklist for better AI images",
        items: [
          "Name the subject clearly before adding style details.",
          "Describe the output type, such as product photo, editorial image, app hero image, poster, thumbnail, or character concept.",
          "Add composition details like close-up, centered product, wide banner, clean background, or vertical portrait.",
          "Use reference images when identity, shape, color, or layout needs to stay consistent.",
          "Choose an aspect ratio before generation so the image fits its destination.",
          "Avoid stacking too many style words if the product or subject needs to remain recognizable.",
        ],
      },
      {
        type: "paragraphs",
        heading: "How to use Nano Banana for product and marketing images",
        paragraphs: [
          "For product visuals, start with a clean reference image and ask for a specific use case. A prompt like 'create a premium ecommerce hero image with soft studio lighting, clean background, and space for headline text' gives the generator a useful layout target.",
          "For marketing images, define the channel before generation. A square social post, a 16:9 website hero, and a vertical story image need different framing. If you choose the aspect ratio first, the AI image generator can compose around the final placement instead of cropping important details later.",
          "For brand consistency, keep a small reference set: product image, color palette, logo-safe background, and one example of the desired style. Reusing these references can make a prompt image generator feel more predictable over time.",
        ],
      },
      {
        type: "list",
        heading: "Common mistakes to avoid",
        items: [
          "Using only a vague prompt such as 'make it beautiful' without naming the subject or destination.",
          "Uploading too many conflicting reference images when one clean reference would be clearer.",
          "Forgetting aspect ratio until after generation, then cropping away important content.",
          "Asking for text-heavy images when the layout could use empty space for real design text later.",
          "Changing prompt, reference image, and aspect ratio all at once, which makes it harder to learn what improved the result.",
        ],
      },
      {
        type: "faq",
        heading: "FAQ",
        items: [
          {
            question: "Is Nano Banana an AI image generator?",
            answer:
              "Yes. Nano Banana is positioned here as an AI image generator for prompt-based image generation, reference image workflows, and image-to-image editing.",
          },
          {
            question: "Can I generate images from a reference image?",
            answer:
              "Yes. A reference image can guide the subject, layout, color, or style while the prompt describes what should change in the final result.",
          },
          {
            question: "What keywords describe this tool best?",
            answer:
              "The most relevant keywords include Nano Banana AI image generator, AI image generator with reference image, reference image generator, prompt-based image generation, and image-to-image editing.",
          },
          {
            question: "What makes a good prompt for AI image generation?",
            answer:
              "A good prompt names the subject, output type, composition, style, and any constraints. If visual consistency matters, combine the prompt with a reference image.",
          },
        ],
      },
    ],
  },
];

export function getStaticBlogPosts(): StaticBlogPost[] {
  return STATIC_BLOG_POSTS.slice().sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
  );
}

export function getStaticBlogPostBySlug(slug: string): StaticBlogPost | undefined {
  return STATIC_BLOG_POSTS.find((post) => post.slug === slug);
}
