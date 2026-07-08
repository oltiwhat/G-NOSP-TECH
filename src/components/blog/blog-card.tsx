import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  type Post,
  estimateReadingTime,
  formatDate,
} from "@/lib/data/posts";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border glass transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow",
        featured && "sm:col-span-2",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-br",
          post.gradient,
          featured ? "h-60" : "h-44",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 grid-pattern opacity-30"
        />
        <div
          aria-hidden
          className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
        />
        <span className="absolute left-4 top-4">
          <Badge variant="glass">{post.category}</Badge>
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3
          className={cn(
            "font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent",
            featured ? "text-2xl" : "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/90">
            {post.author.name}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {estimateReadingTime(post.content)} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
