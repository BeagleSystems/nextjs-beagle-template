import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

import '@/styles/globals.css';

import { Logo, SettingsIcon, UsersIcon } from '@/components/icons';
import UnderlineLink from '@/components/links/UnderlineLink';

import { NavItem } from '@/app/nav-item';
import { siteConfig } from '@/constant/config';

// import { User } from './user';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="border-r bg-gray-100/40 sm:hidden lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
                  <Logo />
                  <span>BeagleSystems</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  <NavItem href="/">
                    <UsersIcon className="h-4 w-4" />
                    Overview
                  </NavItem>
                  <NavItem href="/power">
                    <SettingsIcon className="h-4 w-4" />
                    UPSMonitor
                  </NavItem>
                  <NavItem href="/components">
                    <SettingsIcon className="h-4 w-4" />
                    Components
                  </NavItem>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              
              {/* <User /> */}
            </header>
            {children}

            <footer className='absolute bottom-2 text-gray-700 hidden sm:block'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://beaglesystems.com'>
                Beagle Systems GmbH
              </UnderlineLink>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
