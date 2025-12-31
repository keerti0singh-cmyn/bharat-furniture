'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-dark via-primary to-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-2xl text-secondary">संपर्क करें</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* LEFT INFO */}
              <div>
                <h2 className="text-3xl font-bold text-dark mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
                    <a
                      href="tel:09935286138"
                      className="text-lg text-primary font-semibold"
                    >
                      099352 86138
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/919935286138"
                      target="_blank"
                      className="text-lg text-green-600 font-semibold"
                    >
                      +91 99352 86138
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-dark mb-2">
                      Address
                    </h3>
                    <p>
                      Birsinghpur Urf Allipur,
                      <br />
                      Mau Aima, Uttar Pradesh – 212507
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-dark mb-6">
                  Send Us a Message
                </h2>

                <p className="mb-6">
                  Have a question? Fill out the form and we&apos;ll call you.
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-3 rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border p-3 rounded"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full border p-3 rounded"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        'Thank you! Please call us at 09935286138 for quick response.'
                      )
                    }
                    className="w-full bg-primary text-white py-3 rounded font-bold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingButtons />
      <Footer />
    </div>
  );
}
