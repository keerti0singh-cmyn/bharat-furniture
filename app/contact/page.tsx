import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Contact Us | Bharat Furniture - Mau Aima, Uttar Pradesh',
  description: 'Contact Bharat Furniture in Mau Aima, Uttar Pradesh. Call us at 099352 86138, visit our store, or WhatsApp us. Get quality wooden furniture today!',
  keywords: 'Contact Bharat Furniture, Furniture Shop Phone, Mau Aima Address, Furniture Store Location Uttar Pradesh',
};

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
              <div>
                <h2 className="text-3xl font-bold text-dark mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
                        <a
                          href="tel:09935286138"
                          className="text-foreground text-lg hover:text-primary transition-colors"
                        >
                          099352 86138
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Call us for any queries</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">WhatsApp</h3>
                        <a
                          href="https://wa.me/919935286138"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground text-lg hover:text-green-600 transition-colors"
                        >
                          +91 99352 86138
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Chat with us anytime</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">Store Address</h3>
                        <p className="text-foreground">
                          Birsinghpur Urf Allipur,<br />
                          Mau Aima, Uttar Pradesh – 212507
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">Business Hours</h3>
                        <p className="text-foreground">Open till 8:00 PM</p>
                        <p className="text-sm text-gray-500 mt-1">Visit us during working hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-dark mb-6">Send Us a Message</h2>
                  <p className="text-foreground mb-6">
                    Have a question? Fill out the form below and we'll get back to you soon.
                  </p>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                        Your Name / आपका नाम
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                        Phone Number / फ़ोन नंबर
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                        Your Message / आपका संदेश
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us what you're looking for"
                      ></textarea>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => alert('Thank you for your message! Please call us at 09935286138 for immediate assistance.')}
                      className="w-full bg-primary hover:bg-dark text-white py-4 rounded-lg text-lg font-bold transition-all hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    For faster response, call us directly at <a href="tel:09935286138" className="text-primary font-semibold">099352 86138</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <h2 className="text-2xl font-bold text-dark p-6 border-b border-gray-200">Find Us on Map</h2>
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9666967302897!2d81.6878!3d25.3958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985848899999999%3A0x1234567890!2sMau%20Aima%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
