import clsx from 'clsx';
import React from 'react';

export const OverviewTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | string[];
}) => <h2 className={clsx('text-lg font-semibold', className)}>{children}</h2>;
