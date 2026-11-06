"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  function setThankYouRedirect(event: FormEvent<HTMLFormElement>) {
    const redirectField = event.currentTarget.elements.namedItem("_redirect");
    if (redirectField instanceof HTMLInputElement) {
      redirectField.value = new URL("/thank-you", window.location.origin).toString();
    }
  }

  return (
    <section className="section contact-form-section" aria-labelledby="contact-form-title">
      <div className="section-head">
        <h2 className="title" id="contact-form-title">Send a message</h2>
      </div>
      <form
        className="contact-form"
        action="https://server.infraly.online/api/forms-and-api/f/nitin-portfolio"
        method="POST"
        onSubmit={setThankYouRedirect}
      >
        <div className="contact-form-grid">
          <label className="contact-field">
            Name
            <input name="name" type="text" autoComplete="name" required maxLength={100} />
          </label>
          <label className="contact-field">
            Email
            <input name="email" type="email" autoComplete="email" required maxLength={254} />
          </label>
          <label className="contact-field contact-field-wide">
            Subject
            <input name="subject" type="text" required maxLength={160} />
          </label>
          <label className="contact-field contact-field-wide">
            Message
            <textarea name="message" required minLength={10} maxLength={5000} rows={7} />
          </label>
        </div>
        <input name="_redirect" type="hidden" value="/thank-you" />
        <input name="_gotcha" type="text" hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="contact-form-actions">
          <button className="btn primary" type="submit">
            Send message <ArrowUpRight className="ui-icon arrow-icon" size={14} aria-hidden="true" />
          </button>
          <p className="contact-form-note">Your message will be sent through the contact form.</p>
        </div>
      </form>
    </section>
  );
}
