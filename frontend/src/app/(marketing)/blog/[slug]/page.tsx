import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { getPosts } from "@/lib/content";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.id === slug);
  return {
    title: post ? `${post.title} — Programmer Nexus` : "Post not found — Programmer Nexus",
    description: post ? `${post.category} · ${post.author} · ${post.read} read` : undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.id === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="section" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Link href="/blog" className="btn btn-link" style={{ marginBottom: 24 }}>
            ← All field notes
          </Link>
          <div className="eyebrow" style={{ marginTop: 20 }}>
            <span className="dot" /> {post.category}
          </div>
          <h1
            className="h1 display-mix"
            style={{ marginTop: 24, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05 }}
          >
            {post.title}
          </h1>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              alignItems: "center",
              gap: 16,
              paddingBottom: 32,
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="avatar" style={{ width: 44, height: 44, fontSize: 15 }}>
              {post.author.split(" ").map((x) => x[0]).join("")}
            </div>
            <div>
              <div style={{ fontWeight: 500 }}>{post.author}</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--fg-mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {post.date} · {post.read} read
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: 18, lineHeight: 1.7, color: "var(--fg-dim)", display: "flex", flexDirection: "column", gap: 20 }}>
            <p>
              <span className="serif" style={{ fontSize: 64, lineHeight: 0.8, float: "left", marginRight: 12, marginTop: 6, color: "var(--accent)" }}>
                {post.title.charAt(0)}
              </span>
              This is the full text of <em>&ldquo;{post.title}&rdquo;</em>. In a production deployment
              the body would be loaded from the CMS via the admin&apos;s blog editor and rendered
              here as MDX or rich HTML. For now the article body is rendered from the post stub
              so layout, typography and reading experience can be tested end-to-end.
            </p>
            <p>
              Programmer Nexus publishes engineering writeups from real production work. We avoid
              listicles, repurposed twitter threads, and content marketing. Every post here is
              written by the senior practitioner who shipped the system being described.
            </p>
            <p>
              If a post is missing here you may need to publish it from the admin panel
              (<span className="mono">/admin/blog</span>). Posts in <span className="mono">Draft</span>
              status do not appear on the public listing.
            </p>
          </div>

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {post.id} · {post.views.toLocaleString()} views
            </div>
            <Button variant="primary" href="/contact">
              Start a project <Icon name="arrow" size={14} />
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
