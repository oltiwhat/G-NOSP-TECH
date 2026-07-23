"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import {
  LoaderCircle,
  Send,
  CircleCheckBig,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().optional(),
  topic: z.enum(["general", "sales", "support", "partnership"]),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)."),
  consent: z
    .boolean()
    .refine((v) => v === true, "Please accept the privacy policy."),
});

type ContactValues = z.infer<typeof contactSchema>;

const topicOptions: { value: ContactValues["topic"]; label: string }[] = [
  { value: "general", label: "General" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Support" },
  { value: "partnership", label: "Partnership" },
];

const inputBase =
  "w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { topic: "general", consent: false },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactValues) {
    await new Promise((r) => setTimeout(r, 1100));
    // In production, send `values` to your API/route handler here.
    setSubmitted(true);
    toast.success("Message sent", {
      description: `Thanks ${values.name.split(" ")[0]}, we'll be in touch shortly.`,
    });
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border glass p-6 sm:p-8">
      <div
        aria-hidden
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)] blur-3xl"
      />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5 py-10 text-center"
          >
            <motion.span
              initial={reduce ? {} : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-black to-violet-600 text-white shadow-lg shadow-accent/40"
            >
              <CircleCheckBig className="h-8 w-8" />
            </motion.span>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Message sent successfully
              </h3>
              <p className="max-w-sm text-sm text-muted-foreground">
                Our team has received your message and will respond within one
                business day. A confirmation is on its way to your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
                className={cn(buttonVariants({ variant: "secondary", size: "md" }))}
              >
                Send another
              </button>
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "default", size: "md" }))}
              >
                Back to home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Send us a message
              </h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your project and we&apos;ll get back to you quickly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Ada Lovelace"
                  aria-invalid={!!errors.name}
                  className={cn(inputBase, errors.name && "border-red-500/60")}
                />
              </Field>
              <Field label="Work email" error={errors.email?.message}>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  className={cn(inputBase, errors.email && "border-red-500/60")}
                />
              </Field>
            </div>

            <Field label="Company (optional)">
              <input
                {...register("company")}
                type="text"
                placeholder="Acme Inc."
                className={inputBase}
              />
            </Field>

            <Field label="Topic" error={errors.topic?.message}>
              <div className="flex flex-wrap gap-2">
                {topicOptions.map((opt) => (
                  <TopicChip
                    key={opt.value}
                    value={opt.value}
                    label={opt.label}
                    register={register}
                  />
                ))}
              </div>
            </Field>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="What are you building, and what does success look like?"
                aria-invalid={!!errors.message}
                className={cn(
                  inputBase,
                  "resize-none",
                  errors.message && "border-red-500/60",
                )}
              />
            </Field>

            <div className="flex flex-col gap-2">
              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-0.5 h-4 w-4 rounded border-border bg-secondary/40 accent-accent"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/legal/privacy" className="text-accent hover:underline">
                    privacy policy
                  </Link>{" "}
                  and consent to being contacted.
                </span>
              </label>
              {errors.consent && (
                <span className="text-xs text-red-400">
                  {errors.consent.message}
                </span>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={reduce ? undefined : { scale: 1.01 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-1 w-full justify-center",
                isSubmitting && "cursor-not-allowed opacity-90",
              )}
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              Your information is encrypted and never shared.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function TopicChip({
  value,
  label,
  register,
}: {
  value: ContactValues["topic"];
  label: string;
  register: ReturnType<typeof useForm<ContactValues>>["register"];
}) {
  return (
    <label
      className={cn(
        "cursor-pointer rounded-full border border-border px-4 py-2 text-sm transition-colors",
        "has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-accent",
      )}
    >
      <input
        type="radio"
        value={value}
        {...register("topic")}
        className="sr-only"
      />
      {label}
    </label>
  );
}
