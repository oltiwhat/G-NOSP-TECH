import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getRelated } from "@/lib/data/posts";

export function RelatedArticles({ slug }: { slug: string }) {
  const related = getRelated(slug, 3);
  if (related.length === 0) return null;

  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading
        align="left"
        eyebrow="Keep reading"
        title="Related articles"
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
