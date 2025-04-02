'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type DataObj = {
  id: string;
  description: string;
};

type Props = {
  defaultValue?: string;
  id: string;
  data: DataObj[];
  className?: string;
  ariaLabel: string;
};

export function SimpleSelect({
  id,
  data,
  className,
  defaultValue,
  ariaLabel,
}: Props) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger
        id={`${id}-selectTrigger`}
        aria-label={ariaLabel}
        className={`w-full max-w-xs rounded-full bg-white dark:bg-black ${className}`}
      >
        <SelectValue placeholder="Select" />
      </SelectTrigger>

      <SelectContent>
        {data.map((item) => (
          <SelectItem key={`${id}-selectTrigger_${item.id}`} value={item.id}>
            {item.description}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
