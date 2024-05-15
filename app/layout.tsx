import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  display: 'swap', 
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin-ext'],
})
export const metadata: Metadata = {
  title: "FriendBob",
  description: "Connect with your friends and family easily.",
};
import { ManagerProvider } from '@/contexts/manage-context';
import { HeaderComponent } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <ManagerProvider>
        <HeaderComponent />
        {children}
        <Footer />
      </ManagerProvider>
      </body>
    </html>
  );
}