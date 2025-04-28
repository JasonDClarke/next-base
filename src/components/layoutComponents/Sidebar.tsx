import React from 'react';
import { SidebarButton, SidebarProvider } from '../buttons/SidebarButton';
import { LayoutDashboard, Settings } from 'lucide-react';
import SidebarNavButton from '../buttons/SidebarNavButton';

export const Sidebar = async () => {
  return (
    <aside
      id="sidebar"
      // width is set with css, toggling open and shut for perf reasons, it means we can make this component a RSC.
      className="fixed z-30 h-dvh bg-black"
    >
      <SidebarProvider>
        <SidebarButton />
      </SidebarProvider>
      {/* // add extra padding to bottom and scroll so scrolling definitely works on mobile */}
      {/* Note that main body scroll is disabled in global.css */}
      <div className="h-dvh overflow-y-auto pb-20 md:pb-0">
        <section className="mx-5 flex flex-col gap-4">
          <SidebarNavButton href="/dashboard" icon={<LayoutDashboard />}>
            Dashboard
          </SidebarNavButton>
          <SidebarNavButton href="/settings" icon={<Settings />}>
            Menu Settings
          </SidebarNavButton>
        </section>
      </div>
    </aside>
  );
};
