"use client";

import { useId, useState } from "react";
import Icon from "@/components/ui/Icon";
import styles from "./ContactForm.module.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  date: "",
  message: "",
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState(initialForm);
  const [files, setFiles] = useState<string[]>([]);
  const fileId = useId();

  const update = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name";
    if (!formData.phone.trim()) nextErrors.phone = "Please enter a phone number";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!formData.service) nextErrors.service = "Please choose a service";

    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      const field = document.getElementById(firstError);
      field?.focus();
    }

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 1400);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setFiles([]);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successIcon}>
          <Icon name="check" size={26} strokeWidth={2} />
        </span>
        <span className={styles.successEyebrow}>Request received</span>
        <h2>Thanks — we&apos;ve got it.</h2>
        <p>
          Your request has been captured. We will review the details and get back to
          you shortly to discuss the next step.
        </p>
        <div className={styles.successActions}>
          <a href="tel:+61451460307" className="btn btn-primary">
            <Icon name="phone" size={15} />
            Call us now
          </a>
          <button type="button" onClick={handleReset} className="btn btn-outline">
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.head}>
        <div>
          <span className={styles.eyebrow}>Quote request</span>
          <h2 className={styles.title}>Tell us about your property</h2>
        </div>
        <span className={styles.time}>
          <Icon name="clock" size={13} />
          2 min
        </span>
      </div>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>
          <span>01</span>
          Your details
        </legend>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">
              Name <span className={styles.req}>*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(event) => update("name", event.target.value)}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className={styles.error} role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">
              Phone <span className={styles.req}>*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="04XX XXX XXX"
              value={formData.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <span id="phone-error" className={styles.error} role="alert">
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
            Email <span className={styles.req}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(event) => update("email", event.target.value)}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className={styles.error} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend className={styles.legend}>
          <span>02</span>
          About the project
        </legend>

        <div className={styles.rowThree}>
          <div className={styles.field}>
            <label htmlFor="service">
              Service <span className={styles.req}>*</span>
            </label>
            <div className={styles.selectWrap}>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(event) => update("service", event.target.value)}
                aria-required="true"
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">Select a service</option>
                <option value="steam-cleaning">Steam Cleaning</option>
                <option value="strip-and-polish">Strip &amp; Polish</option>
                <option value="property-maintenance">Property Maintenance</option>
                <option value="other">Something else</option>
              </select>
              <Icon name="chevron-down" size={15} />
            </div>
            {errors.service && (
              <span id="service-error" className={styles.error} role="alert">
                {errors.service}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="propertyType">Property type</label>
            <div className={styles.selectWrap}>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={(event) => update("propertyType", event.target.value)}
              >
                <option value="">Select a type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Rental">Rental</option>
                <option value="Other">Other</option>
              </select>
              <Icon name="chevron-down" size={15} />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="date">Preferred date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={(event) => update("date", event.target.value)}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about the property and what you need help with."
            value={formData.message}
            onChange={(event) => update("message", event.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={fileId}>Photos (optional)</label>
          <label className={styles.upload} htmlFor={fileId}>
            <input
              id={fileId}
              name="photos"
              type="file"
              multiple
              accept="image/*"
              onChange={(event) =>
                setFiles(Array.from(event.target.files ?? []).map((file) => file.name))
              }
            />
            <span className={styles.uploadIcon}>
              <Icon name="upload" size={18} />
            </span>
            <span className={styles.uploadText}>
              <strong>
                {files.length > 0
                  ? `${files.length} photo(s) selected`
                  : "Add photos of the property"}
              </strong>
              <span>
                {files.length > 0
                  ? files.slice(0, 2).join(", ") + (files.length > 2 ? "…" : "")
                  : "Helps us understand the scope — JPG or PNG"}
              </span>
            </span>
            <span className={styles.uploadAction}>Browse</span>
          </label>
        </div>
      </fieldset>

      <button type="submit" className={styles.submit} disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending request…
          </>
        ) : (
          <>
            Request a free quote
            <Icon name="arrow-right" size={16} />
          </>
        )}
      </button>

      <p className={styles.note}>
        <Icon name="shield" size={13} />
        Your details stay private. No obligation, no pressure.
      </p>
    </form>
  );
}
