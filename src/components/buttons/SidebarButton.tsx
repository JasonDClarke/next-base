'use client';

import clsx from 'clsx';
import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for sidebar state
const SidebarContext = createContext({
  sidebarOpen: true,
  sidebarSet: false,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarSet, setSidebarSet] = useState(false);
  const pathname = usePathname(); // Detects route changes

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    if (!sidebarSet) {
      setSidebarSet(true);
    }
  };

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      setSidebarOpen(false);
    }
    setSidebarSet(true);
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
    if (!sidebarSet) {
      setSidebarSet(true);
    }
  };

  // Close sidebar when navigation occurs
  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      closeSidebar();
    }
  }, [pathname]);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar, sidebarSet }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);

export const SidebarButton = () => {
  const { sidebarOpen, sidebarSet, toggleSidebar } = useSidebar();

  return (
    <button
      id="sidebarButton"
      aria-label="Toggle sidebar"
      title="Toggle sidebar"
      //   note to ensure fixed layout RSC, using css to toggle sidebar, see globals.css
      // toggle horizontal position with translate so animation works
      className={clsx(
        sidebarSet ? 'sidebar-set' : 'sidebar-unset',
        sidebarOpen
          ? 'sidebar-open -translate-x-5 transition-transform md:translate-x-5'
          : 'sidebar-closed translate-x-12 rotate-180 transition-transform',
        'absolute right-0 top-5 h-10 w-10 rounded-full bg-white transition-colors hover:bg-stone-100 hover:transition-colors dark:bg-stone-600 dark:hover:bg-stone-400'
      )}
      onClick={toggleSidebar}
    >
      <ChevronLeft className="absolute left-2 top-2" />
    </button>
  );
};
