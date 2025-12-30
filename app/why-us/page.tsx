import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Why Choose Us | Bharat Furniture - Best Furniture in Mau Aima',
  description: 'Why choose Bharat Furniture? Solid wood furniture, custom size options, affordable pricing, after-sales support, and trusted by local customers in Mau Aima, Uttar Pradesh.',
  keywords: 'Why Bharat Furniture, Best Furniture Shop Mau Aima, Solid Wood Furniture, Custom Furniture, Affordable Furniture Uttar Pradesh',
};

const reasons = [
  {
    title: 'Solid Wood Furniture',
    hindiTitle: 'ठोस लकड़ी का फ़र्नीचर',
    description: 'We use only high-quality solid wood for all our furniture, ensuring durability and longevity.',
    hindiDescription: 'हम अपने सभी फ़र्नीचर के लिए केवल उच्च गुणवत्ता वाली ठोस लकड़ी का उपयोग करते हैं, जो टिकाऊपन सुनिश्चित करता है।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Custom Size Options',
    hindiTitle: 'कस्टम साइज़ विकल्प',
    description: 'Need furniture that fits your space perfectly? We offer custom sizing to meet your specific requirements.',
    hindiDescription: 'आपको ऐसा फ़र्नीचर चाहिए जो आपकी जगह में पूरी तरह फिट हो? हम आपकी विशिष्ट आवश्यकताओं के अनुसार कस्टम साइज़िंग प्रदान करते हैं।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: 'Affordable Pricing',
    hindiTitle: 'सस्ती कीमत',
    description: 'Quality furniture at reasonable prices. We believe everyone deserves good furniture within their budget.',
    hindiDescription: 'उचित मूल्य पर गुणवत्तापूर्ण फ़र्नीचर। हम मानते हैं कि हर किसी को अपने बजट के भीतर अच्छा फ़र्नीचर मिलना चाहिए।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'After-Sales Support',
    hindiTitle: 'बिक्री के बाद सहायता',
    description: 'Our relationship doesn\'t end after the sale. We provide excellent after-sales service and support.',
    hindiDescription: 'हमारा रिश्ता बिक्री के बाद समाप्त नहीं होता। हम बिक्री के बाद उत्कृष्ट सेवा और सहायता प्रदान करते हैं।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Trusted by Local Customers',
    hindiTitle: 'स्थानीय ग्राहकों द्वारा भरोसा',
    description: 'Serving the community for years with trust and integrity. Our customers\' satisfaction is our priority.',
    hindiDescription: 'वर्षों से भरोसे और ईमानदारी के साथ समुदाय की सेवा कर रहे हैं। हमारे ग्राहकों की संतुष्टि हमारी प्राथमिकता है।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Home Delivery Available',
    hindiTitle: 'होम डिलीवरी उपलब्ध',
    description: 'Get your furniture delivered safely to your doorstep. We ensure safe and timely delivery.',
    hindiDescription: 'अपना फ़र्नीचर सुरक्षित रूप से अपने द्वार पर पहुंचाएं। हम सुरक्षित और समय पर डिलीवरी सुनिश्चित करते हैं।',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  },
];

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-br from-dark via-primary to-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h1>
            <p className="text-2xl text-secondary">हमें क्यों चुनें?</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all border-l-4 border-primary"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                      {reason.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-dark">{reason.title}</h2>
                      <p className="text-lg text-primary font-medium">{reason.hindiTitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground mb-3">{reason.description}</p>
                  <p className="text-foreground text-sm italic">{reason.hindiDescription}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-dark mb-4">Ready to Experience Our Service?</h2>
                <p className="text-xl text-foreground mb-2">हमारी सेवा का अनुभव करने के लिए तैयार हैं?</p>
                <p className="text-foreground">
                  Visit our store or contact us today. Let us help you find the perfect furniture for your home.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:09935286138"
                  className="bg-primary hover:bg-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 text-center"
                >
                  Call Now: 099352 86138
                </a>
                <a
                  href="https://wa.me/919935286138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 text-center"
                >
                  WhatsApp Chat
                </a>
                <a
                  href="/contact"
                  className="bg-secondary hover:bg-primary hover:text-white text-dark px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 text-center"
                >
                  Visit Store
                </a>
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
