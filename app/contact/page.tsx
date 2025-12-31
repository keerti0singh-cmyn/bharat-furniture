import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactForm from './ContactForm';

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
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT INFO */}
            <div>
              <h2 className="text-3xl font-bold text-dark mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold">Phone</h3>
                  <a href="tel:09935286138" className="text-primary font-semibold">
                    099352 86138
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold">WhatsApp</h3>
                  <a
                    href="https://wa.me/919935286138"
                    className="text-green-600 font-semibold"
                  >
                    +91 99352 86138
                  </a>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold">Address</h3>
                  <p>
                    Birsinghpur Urf Allipur,<br />
                    Mau Aima, Uttar Pradesh – 212507
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <ContactForm />
          </div>
        </section>
      </main>

      <FloatingButtons />
      <Footer />
    </div>
  );
}
