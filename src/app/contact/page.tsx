import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { FAQ } from "@/components/sections/faq";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with G-NOSP TECH. Tell us about your project, book a discovery call, or reach our team directly.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's build something exceptional"
          description="Tell us what you're engineering. Our team typically responds within one business day."
        />

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal direction="right" className="h-full">
              <ContactForm />
            </Reveal>
            <Reveal direction="left" className="h-full">
              <ContactInfo />
            </Reveal>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
