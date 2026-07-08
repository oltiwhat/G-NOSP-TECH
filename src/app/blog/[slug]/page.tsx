import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { ArticleContent } from "@/components/blog/article-content";
import { RelatedArticles } from "@/components/blog/related-articles";
import {
  posts,
  getPost,
  estimateReadingTime,
  formatDate,
} from "@/lib/data/posts";
import { siteConfig } from "@/lib/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author.name],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const readingTime = estimateReadingTime(post.content);
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Navbar />
      <main>
        <article className="mx-auto w-full max-w-3xl px-6 pt-32">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mt-8 flex flex-col gap-5">
            <Badge variant="glass" className="w-fit uppercase tracking-[0.16em]">
              {post.category}
            </Badge>
            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-gradient-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-border py-4 text-sm">
              <span className="inline-flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-semibold text-white">
                  {initials}
                </span>
                <span className="flex flex-col">
                  <span className="font-medium text-foreground">
                    {post.author.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.author.role}
                  </span>
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {readingTime} min read
              </span>
            </div>
          </div>

          <div className="relative my-10 h-56 overflow-hidden rounded-3xl bg-gradient-to-br sm:h-72">
            <div
              aria-hidden
              className="absolute inset-0 grid-pattern opacity-30"
            />
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"
            />
            <span className="absolute inset-0 flex items-center justify-center text-[7rem] font-bold leading-none text-white/10">
              {post.title.charAt(0)}
            </span>
          </div>

          <ArticleContent content={post.content} />

          <div className="mt-12 border-t border-border pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </article>

        <RelatedArticles slug={post.slug} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
