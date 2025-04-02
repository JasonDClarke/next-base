import { Header } from '@/components/layoutComponents/Header';
import { Sidebar } from '@/components/layoutComponents/Sidebar';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    /* For optimization purposes will toggle sidebar with css to avoid use client directive */
    /* see globals.css */
  }
  return (
    <>
      <Sidebar />
      <div className="flex w-full">
        <div
          id="sidebarPlaceholder"
          className="h-screen bg-stone-200 dark:bg-stone-900"
        ></div>
        <div id="mainLayoutSection">
          <Header />
          <main className="bg-stone-200 px-4 py-2 dark:bg-stone-900">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
