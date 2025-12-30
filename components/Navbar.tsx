'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/why-us', label: 'Why Choose Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary tracking-tight">
                भारत फ़र्नीचर
              </span>
              <span className="text-xs sm:text-sm text-dark font-medium">
                Bharat Furniture
              </span>
            </div>
          </Link>

          <button
            className="sm:hidden p-2 text-dark hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden sm:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  pathname === link.href
                    ? 'bg-primary text-white'
                    : 'text-dark hover:bg-secondary hover:text-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? 'bg-primary text-white'
                      : 'text-dark hover:bg-secondary hover:text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
