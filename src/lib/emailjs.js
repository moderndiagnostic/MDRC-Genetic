import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function isEmailJsConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}

/**
 * Send booking/callback form data through EmailJS.
 * Template variables expected: name, phone, city, test, message, source
 */
export async function sendBookingEmail({
  name,
  phone,
  city = "",
  test = "",
  message = "",
  source = "Website Form",
}) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file."
    );
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: name.trim(),
      phone: phone.trim(),
      city: city.trim() || "—",
      test: test.trim() || "—",
      message: message.trim() || "—",
      source,
    },
    { publicKey: PUBLIC_KEY }
  );
}
