import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FlaskConical, QrCode, Leaf, Sparkles, CheckCircle } from "lucide-react";

const AboutPage = () => {
  const canonicalPath = "/about";

  return (
    <>
      <SEO
        title="About WellForged | Radical Transparency, Zero Fillers"
        description="WellForged is a premium D2C wellness brand built on radical transparency: single-ingredient formulations, third‑party testing, and batch‑wise verification. Learn our story, mission, and process."
        canonical={canonicalPath}
        ogType="website"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About WellForged",
            "url": canonicalPath,
            "isPartOf": { "@type": "WebSite", "name": "WellForged", "url": "/" },
            "about": {
              "@type": "Organization",
              "name": "WellForged",
              "slogan": "Wellness, Forged With Integrity",
              "description":
                "Premium D2C wellness supplements with single-ingredient focus, third-party testing, and batch verification.",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
              { "@type": "ListItem", "position": 2, "name": "About", "item": canonicalPath },
            ],
          },
        ]}
      />
      <Navbar />

      <main className="page-pt min-h-screen bg-background pb-[var(--space-xl)]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20">
            <p className="eyebrow-label">About WellForged</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A premium D2C brand built on <span className="text-primary">proof</span>, not promises.
            </h1>
            <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              WellForged exists for customers who read labels, ask hard questions, and want clarity they can verify.
              No filler blends. No vague claims. Just disciplined sourcing, rigorous testing, and a system that lets you
              validate every batch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/product">
                <Button variant="hero" size="xl" className="h-12 gap-2 sm:h-14">
                  Shop Moringa <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/transparency">
                <Button variant="outline" size="xl" className="h-12 gap-2 sm:h-14">
                  Verify a Batch <QrCode className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Leaf, title: "Single-Ingredient", desc: "One ingredient, fully declared. No hidden blends." },
                { icon: FlaskConical, title: "Third‑Party Tested", desc: "Independent labs. Real results, not marketing." },
                { icon: Shield, title: "Batch‑Wise Verification", desc: "A transparency portal built into the brand." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="premium-panel bg-card/70 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{title}</p>
                      <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story + Mission */}
        <section className="section-padding bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="premium-panel bg-background p-6 sm:p-8">
                <p className="eyebrow-label">Our Story</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">Why WellForged began</h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We started with a simple observation: in wellness, trust is often outsourced to branding. Fancy
                  packaging can hide vague labels, proprietary blends, and uncheckable claims.
                </p>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  WellForged is the opposite. We build trust the hard way—by making every decision measurable. If we say
                  something is pure, you should be able to verify it.
                </p>
                <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-secondary/30 p-4">
                  <Sparkles className="h-5 w-5 text-gold" />
                  <p className="font-body text-sm text-foreground">
                    Our belief: <span className="font-semibold">Luxury is clarity.</span>
                  </p>
                </div>
              </div>

              <div className="premium-panel bg-background p-6 sm:p-8">
                <p className="eyebrow-label">Mission</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Make clean nutrition the default
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We’re building a D2C brand where the product page is not the end of the story—it’s the beginning. Every
                  batch should ship with evidence, not ambiguity.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    "Single-ingredient formulations with no filler stack.",
                    "Transparent sourcing and disciplined processing.",
                    "Independent testing and batch‑wise reporting.",
                    "An experience designed to feel premium, calm, and minimal.",
                  ].map((line) => (
                    <div key={line} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="font-body text-sm text-muted-foreground">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow-label">Why Us</p>
              <h2 className="mt-3 section-title">We don’t ask you to trust—</h2>
              <p className="section-copy mt-3">
                We build a system where trust becomes optional. You can verify the batch, understand the ingredient, and
                see the standards behind every pack.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Integrity over intensity",
                  desc: "No exaggerated claims. We focus on what we can substantiate with testing and traceability.",
                },
                {
                  icon: FlaskConical,
                  title: "Evidence-first process",
                  desc: "Every critical input is measurable: purity, safety markers, and batch documentation.",
                },
                {
                  icon: QrCode,
                  title: "Transparency you can use",
                  desc: "Our portal is not a PDF graveyard. It’s a consumer-facing verification layer.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="premium-panel bg-card p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-secondary/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="eyebrow-label">Our Process</p>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  How a pack earns the WellForged label
                </h2>
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We treat every step like a quality gate. If it can’t be verified, it doesn’t ship.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "1) Source with discipline",
                    desc: "Ingredient selection prioritizes consistency, cleanliness, and traceable supply chains.",
                  },
                  {
                    title: "2) Process for purity",
                    desc: "We keep processing simple and controlled to preserve quality without additives.",
                  },
                  {
                    title: "3) Test independently",
                    desc: "Third‑party labs validate safety markers and purity before a batch moves forward.",
                  },
                  {
                    title: "4) Publish verification",
                    desc: "Batch data is surfaced to customers via our transparency portal—built into the experience.",
                  },
                ].map((step) => (
                  <div key={step.title} className="premium-panel bg-background p-5 sm:p-6">
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-primary">{step.title}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="premium-panel bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="eyebrow-label">Start Here</p>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Experience clean nutrition—calm, minimal, verified.
                  </h2>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Shop Moringa or verify a batch to see how we build trust with evidence. If you have questions, we’re
                    here to help.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Link to="/product">
                    <Button variant="hero" size="xl" className="h-12 gap-2 sm:h-14">
                      Shop Now <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/contact-us">
                    <Button variant="outline" size="xl" className="h-12 gap-2 sm:h-14">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;

