import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'About Us | Bharat Furniture - Mau Aima, Uttar Pradesh',
  description: 'भारत फ़र्नीचर के बारे में जानें - सालों का अनुभव, गुणवत्तापूर्ण लकड़ी और ग्राहकों का भरोसा। Learn about our family-run furniture business in Mau Aima, Uttar Pradesh.',
  keywords: 'About Bharat Furniture, Furniture Business Mau Aima, Local Furniture Store, Wooden Furniture History',
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-br from-dark via-primary to-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-2xl text-secondary">हमारे बारे में जानें</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-dark mb-6 text-center">
                Welcome to Bharat Furniture
              </h2>
              <div className="prose prose-lg max-w-none text-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  भारत फ़र्नीचर में आपका स्वागत है! हम सालों से Mau Aima, Uttar Pradesh में अपने समुदाय को गुणवत्तापूर्ण और टिकाऊ लकड़ी के फ़र्नीचर प्रदान कर रहे हैं। एक स्थानीय परिवार-चलाई जाने वाले व्यवसाय के रूप में, हम अपने ग्राहकों की ज़रूरतों को समझते हैं और हर घर के लिए सही फ़र्नीचर प्रदान करने का प्रयास करते हैं।
                </p>
                <p className="text-lg leading-relaxed">
                  Welcome to Bharat Furniture! For years, we have been providing quality and durable wooden furniture to our community in Mau Aima, Uttar Pradesh. As a local family-run business, we understand the needs of our customers and strive to provide the perfect furniture for every home.
                </p>
                <p className="text-lg leading-relaxed">
                  हमारा ध्यान सिर्फ फ़र्नीचर बेचने पर नहीं, बल्कि गुणवत्ता, टिकाऊपन और ग्राहक संतुष्टि पर है। हम अपने हर उत्पाद को बेहतरीन सामग्री और कारीगरी से बनाते हैं ताकि यह आपके घर में सालों तक चले।
                </p>
                <p className="text-lg leading-relaxed">
                  Our focus is not just on selling furniture, but on quality, durability, and customer satisfaction. We craft each product with the finest materials and craftsmanship so it lasts for years in your home.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-secondary">
                <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                  Our Commitment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Solid Wood Quality</h4>
                      <p className="text-foreground">हम सिर्फ सबसे अच्छी गुणवत्ता वाली लकड़ी का उपयोग करते हैं</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Expert Craftsmanship</h4>
                      <p className="text-foreground">अनुभवी कारीगरों द्वारा निर्मित बेहतरीन डिज़ाइन</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Customer Trust</h4>
                      <p className="text-foreground">सालों का भरोसा और हजारों संतुष्ट ग्राहक</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">Fair Pricing</h4>
                      <p className="text-foreground">उचित दामों में गुणवत्तापूर्ण फ़र्नीचर</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl text-dark font-semibold mb-4">
                  आज ही हमसे संपर्क करें और अपने घर को बेहतर बनाएं!
                </p>
                <a
                  href="tel:09935286138"
                  className="inline-block bg-primary hover:bg-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                >
                  Call Us: 099352 86138
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
