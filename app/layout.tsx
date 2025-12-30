import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://bharatfurniture.com'),
  title: {
    default: 'Bharat Furniture | Quality Wooden Furniture in Mau Aima, Uttar Pradesh',
    template: '%s | Bharat Furniture'
  },
  description: 'भारत फ़र्नीचर - मज़बूत फ़र्नीचर, भरोसे का नाम. Quality Wooden Furniture Shop in Mau Aima, Prayagraj Region, Uttar Pradesh. Beds, Sofas, Almirah, Dining Tables & more.',
  keywords: 'Furniture Shop in Mau Aima, Furniture Store in Prayagraj Region, Bharat Furniture Uttar Pradesh, Wooden Furniture, Beds, Sofas, Almirah, Dining Tables',
  authors: [{ name: 'Bharat Furniture' }],
  creator: 'Bharat Furniture',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['hi_IN'],
    url: 'https://bharatfurniture.com',
    siteName: 'Bharat Furniture',
    title: 'Bharat Furniture | Quality Wooden Furniture in Mau Aima',
    description: 'भारत फ़र्नीचर - मज़बूत फ़र्नीचर, भरोसे का नाम. Quality Wooden Furniture for Every Home.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharat Furniture | Quality Wooden Furniture',
    description: 'भारत फ़र्नीचर - मज़बूत फ़र्नीचर, भरोसे का नाम',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
