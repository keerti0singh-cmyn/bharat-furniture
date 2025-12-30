import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              भारत फ़र्नीचर
            </h3>
            <p className="text-sm mb-2 text-white">Bharat Furniture</p>
            <p className="text-secondary text-sm">
              Quality Wooden Furniture for Every Home
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a
                    href="tel:09935286138"
                    className="hover:text-white transition-colors"
                  >
                    099352 86138
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  Birsinghpur Urf Allipur,
                  <br />
                  Mau Aima, Uttar Pradesh – 212507
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>Open till 8:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8 text-center text-sm">
          <p className="text-secondary">
            © {currentYear} Bharat Furniture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
