'use client';

import { useFormStatus } from 'react-dom';
import { LoaderCircle, Search } from 'lucide-react';
import clsx from 'clsx';

export default function SearchIconButton({
  className,
}: {
  className?: string;
}) {
  const status = useFormStatus();
  const color = '#78716C';

  return (
    <button
      type="submit"
      disabled={status.pending}
      className={clsx('h-5 w-5 rounded-full', className)}
      title="Search"
      aria-label="Search"
    >
      {status.pending ? (
        <LoaderCircle className="animate-spin" color={color} />
      ) : (
        <Search color={color} />
      )}
    </button>
  );
}
