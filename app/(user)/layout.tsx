import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import { SanityLive } from '@/sanity/lib/live';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/*<ThemeProvider*/}
      {/*  attribute="class"*/}
      {/*  defaultTheme="system"*/}
      {/*  enableSystem*/}
      {/*  disableTransitionOnChange*/}
      {/*>*/}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="h-full pt-16">
              {children}
            </div>
          </main>
        </div>
      {/*</ThemeProvider>*/}

      <SanityLive />
    </ClerkProvider>
  );
}
