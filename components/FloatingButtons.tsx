'use client';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {/* Call Button */}
      <a
        href="tel:09935286138"
        className="bg-primary text-white px-4 py-3 rounded-full shadow-lg text-center font-semibold"
      >
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919935286138"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg text-center font-semibold"
      >
        WhatsApp
      </a>
    </div>
  );
}
