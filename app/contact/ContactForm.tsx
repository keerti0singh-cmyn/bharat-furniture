'use client';

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-dark mb-6">
        Send Us a Message
      </h2>

      <p className="text-foreground mb-6">
        Have a question? Fill out the form below and we&apos;ll get back to you soon.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 resize-none"
        />

        <button
          type="button"
          onClick={() =>
            alert(
              'Thank you for your message! Please call us at 09935286138 for immediate assistance.'
            )
          }
          className="w-full bg-primary hover:bg-dark text-white py-4 rounded-lg text-lg font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
