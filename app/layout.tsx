import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'TimezoneHub - Free Time Zone Converter & World Clock',
    template: '%s | TimezoneHub',
  },
  description:
    'Convert time zones instantly. World clock for 400+ cities. Meeting planner for remote teams. Free, no sign-up required.',
  keywords: [
    'time zone converter',
    'world clock',
    'meeting planner',
    'time difference',
    'est to pst',
    'ist to est',
    'beijing to new york time',
    'time zone calculator',
  ],
  metadataBase: new URL('https://timezonehub.app'),
  openGraph: {
    title: 'TimezoneHub - Free Time Zone Converter & World Clock',
    description: 'Convert time zones instantly. World clock for 400+ cities. Meeting planner for remote teams.',
    siteName: 'TimezoneHub',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TimezoneHub - Free Time Zone Converter & World Clock',
    description: 'Convert time zones instantly. World clock for 400+ cities.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        {children}
      </body>
    </html>
  );
}
