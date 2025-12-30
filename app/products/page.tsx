import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Products | Bharat Furniture - Beds, Sofas, Almirah & More',
  description: 'Explore our wide range of furniture products - Beds, Sofas, Almirah, Dining Tables, and more. Quality wooden furniture available in Mau Aima, Uttar Pradesh.',
  keywords: 'Furniture Products, Wooden Beds, Sofas, Almirah, Dining Tables, Wardrobes, Chairs, Tables Mau Aima',
};

const categories = [
  {
    name: 'Beds',
    hindiName: 'पलंग',
    description: 'Comfortable and durable beds in various sizes',
    hindiDescription: 'विभिन्न आकारों में आरामदायक और टिकाऊ पलंग',
    gradient: 'from-primary to-dark',
    items: ['King Size Bed', 'Queen Size Bed', 'Double Bed', 'Single Bed']
  },
  {
    name: 'Sofas',
    hindiName: 'सोफ़ा',
    description: 'Stylish and comfortable sofas for your living room',
    hindiDescription: 'आपके लिविंग रूम के लिए स्टाइलिश और आरामदायक सोफ़ा',
    gradient: 'from-secondary to-primary',
    items: ['3-Seater Sofa', '2-Seater Sofa', 'L-Shaped Sofa', 'Single Seater']
  },
  {
    name: 'Almirah',
    hindiName: 'अलमारी',
    description: 'Spacious almirah for all your storage needs',
    hindiDescription: 'आपकी सभी भंडारण जरूरतों के लिए विशाल अलमारी',
    gradient: 'from-dark to-primary',
    items: ['2-Door Almirah', '3-Door Almirah', '4-Door Almirah', 'Wardrobe']
  },
  {
    name: 'Dining Tables',
    hindiName: 'डाइनिंग टेबल',
    description: 'Perfect dining tables for family meals',
    hindiDescription: 'पारिवारिक भोजन के लिए बेहतरीन डाइनिंग टेबल',
    gradient: 'from-primary to-secondary',
    items: ['4-Seater Table', '6-Seater Table', '8-Seater Table', 'Foldable Table']
  },
  {
    name: 'Wardrobes',
    hindiName: 'वॉर्डरोब',
    description: 'Modern wardrobes with smart storage solutions',
    hindiDescription: 'स्मार्ट स्टोरेज समाधानों के साथ आधुनिक वॉर्डरोब',
    gradient: 'from-secondary to-dark',
    items: ['Single Door', 'Double Door', 'Triple Door', 'Walk-in Wardrobe']
  },
  {
    name: 'Tables',
    hindiName: 'टेबल',
    description: 'Study tables, coffee tables, and more',
    hindiDescription: 'स्टडी टेबल, कॉफी टेबल और बहुत कुछ',
    gradient: 'from-dark to-secondary',
    items: ['Study Table', 'Coffee Table', 'Side Table', 'Center Table']
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="bg-gradient-to-br from-dark via-primary to-secondary py-20 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-2xl text-secondary">हमारे फ़र्नीचर की श्रेणियां</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className={`h-56 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <svg className="w-32 h-32 text-white opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-dark mb-1">{category.name}</h2>
                    <p className="text-lg text-primary font-medium mb-3">{category.hindiName}</p>
                    <p className="text-foreground mb-4">{category.description}</p>
                    <p className="text-foreground text-sm mb-6 italic">{category.hindiDescription}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-dark mb-2">Available Options:</p>
                      <ul className="space-y-1">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-foreground flex items-center">
                            <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-dark mb-4">Looking for Something Custom?</h3>
                <p className="text-xl text-foreground mb-2">कस्टम साइज और डिज़ाइन भी उपलब्ध हैं!</p>
                <p className="text-foreground mb-8">
                  We offer custom furniture based on your specific requirements. Contact us to discuss your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:09935286138"
                    className="bg-primary hover:bg-dark text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                  >
                    Call: 099352 86138
                  </a>
                  <a
                    href="https://wa.me/919935286138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105"
                  >
                    WhatsApp Us
                  </a>
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
