'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarNavButton = ({
  className,
  href,
  icon,
  children,
}: {
  className?: string | string[];
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const selected = pathname === href;
  if (selected) {
    return (
      <Link
        href={href}
        className="flex items-center gap-1 text-left leading-tight"
      >
        <button
          className={clsx(
            className,
            'flex w-fit min-w-12 items-center gap-1 rounded-full bg-white py-2 pl-2 pr-3'
          )}
        >
          {icon} {children}
        </button>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="flex items-center gap-1 text-left leading-tight"
    >
      <button
        className={clsx(
          className,
          'flex w-fit gap-1 rounded-full py-2 pl-2 pr-3 text-white transition-colors hover:mx-0 hover:min-w-12 hover:items-center hover:bg-white hover:transition-colors'
        )}
      >
        {icon} {children}
      </button>
    </Link>
  );
};

export default SidebarNavButton;
