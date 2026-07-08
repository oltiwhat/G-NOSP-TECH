import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/shared/page-hero";
import { BlogList } from "@/components/blog/blog-list";
import { posts, blogCategories } from "@/lib/data/posts";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering insights from G-NOSP TECH — on AI, cybersecurity, cloud, architecture, and the craft of building software that lasts.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Insights from the engineering bench"
          description="Field notes on AI, security, cloud, and architecture — written by the people who ship our systems."
        />

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <BlogList posts={posts} categories={blogCategories} />
        </section>
      </main>
      <Footer />
    </>
  );
}
