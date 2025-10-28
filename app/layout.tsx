import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import { VisualEditing } from 'next-sanity/visual-editing';
import { ThemeProvider } from '@/components/ThemeProvider';
import { DisableDraftMode } from '@/components/DisableDraftMode';
import Providers from '@/components/providers/ProgressProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'JTrainings | Expand Your Knowledge with Our Trainings',
  description:
    'Discover a world of learning with our expertly crafted trainings. Learn from industry professionals and take your skills to the next level.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {(await draftMode()).isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
