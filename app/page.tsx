import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export const metadata = {
  title: 'Bharat Furniture | Quality Wooden Furniture in Mau Aima, Uttar Pradesh',
  description: 'भारत फ़र्नीचर - मज़बूत फ़र्नीचर, भरोसे का नाम. Quality Wooden Furniture Shop in Mau Aima, Prayagraj Region, Uttar Pradesh. Beds, Sofas, Almirah, Dining Tables & more.',
  keywords: 'Furniture Shop in Mau Aima, Furniture Store in Prayagraj Region, Bharat Furniture Uttar Pradesh, Wooden Furniture, Beds, Sofas, Almirah, Dining Tables',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <section className="relative bg-gradient-to-br from-dark via-primary to-secondary min-h-[90vh] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              मज़बूत फ़र्नीचर,<br />भरोसे का नाम
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-secondary">
              – भारत फ़र्नीचर
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-secondary font-medium">
              Quality Wooden Furniture for Every Home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:09935286138"
                className="bg-cta hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl"
              >
                Call Now: 099352 86138
              </a>
              <a
                href="https://wa.me/919935286138"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-2xl shadow-lg border-2 border-secondary hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-dark mb-2">In-Store Shopping</h3>
                <p className="text-center text-foreground">Visit our showroom and explore our wide range of furniture</p>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-lg border-2 border-secondary hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-dark mb-2">Kerbside Pickup</h3>
                <p className="text-center text-foreground">Quick and easy pickup service available at your convenience</p>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-lg border-2 border-secondary hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-dark mb-2">Home Delivery</h3>
                <p className="text-center text-foreground">Safe and timely delivery to your doorstep</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark mb-12">
              Featured Furniture Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">Beds</h3>
                  <p className="text-foreground text-sm">Comfortable & durable beds</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary to-dark flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">Sofas</h3>
                  <p className="text-foreground text-sm">Stylish living room sofas</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-dark to-primary flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">Almirah</h3>
                  <p className="text-foreground text-sm">Spacious storage solutions</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <svg className="w-24 h-24 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 0l4 4m12-4l-4 4m-8 0l4-4m4 4l4 4" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-2">Dining Tables</h3>
                  <p className="text-foreground text-sm">Perfect for family meals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark mb-12">
              Why Trust Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Quality Wood</h3>
                <p className="text-foreground">Premium solid wood furniture that lasts</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Reasonable Price</h3>
                <p className="text-foreground">Affordable furniture for every budget</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Local Trusted Shop</h3>
                <p className="text-foreground">Serving the community with trust</p>
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
