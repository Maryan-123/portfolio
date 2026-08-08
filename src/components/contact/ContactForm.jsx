import { useState } from "react";
import { profile } from "../../data/profile";
import { createMailtoLink } from "../../utils/links";
import Button from "../ui/Button";

const initialState = { name: "", email: "", subject: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email.";
    if (!values.subject.trim()) next.subject = "Subject is required.";
    if (!values.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.company) return; // honeypot triggered, silently ignore
    if (!validate()) return;

    setStatus("submitting");

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    if (!endpoint) {
      // No backend configured — fall back to a mailto link so the message
      // is never silently lost.
      window.location.href = createMailtoLink(
        profile.email,
        values.subject,
        `From: ${values.name} (${values.email})\n\n${values.message}`
      );
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it in */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <Field
        label="Subject"
        name="subject"
        value={values.subject}
        onChange={handleChange}
        error={errors.subject}
      />

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          className="w-full rounded-lg border border-border bg-card px-4 py-3 text-text outline-none transition-colors focus:border-accent"
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <Button type="submit" loading={status === "submitting"} className="w-full sm:w-auto">
        Send Message
      </Button>

      {status === "success" && (
        <p className="text-sm text-success" role="status">
          Message sent successfully. I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Unable to send your message. Please contact me directly by email or WhatsApp.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, error }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-text outline-none transition-colors focus:border-accent"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}
