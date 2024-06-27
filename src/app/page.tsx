/* This page is the overview dashboard entry page */

'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import StatusCard from '@/components/cards/StatusCard';

export default function OverviewPage() {
  return (
    <main>
      <Head>
        <title>BeagleSystems</title>
      </Head>
      <section className='bg-white'>
      <div className='layout relative flex min-h-screen flex-col py-12'>
          <div className='flex items-center'>
            <h1 className='mt-4'>Overview</h1>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4'>
            <StatusCard title='R&D' href='/' />
          </div>
        </div>
      </section>
    </main>
  );
}
