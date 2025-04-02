'use client';

import { useState } from 'react';
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
  component: React.ReactNode; // UI tied to the option
};

type Props = {
  defaultValue?: string;
  id: string;
  data: DataObj[];
  className?: string;
  ariaLabel: string;
};

export function UISelect({
  id,
  data,
  className,
  defaultValue,
  ariaLabel,
}: Props) {
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(
    data.find((item) => item.id === defaultValue)?.component || null
  );

  return (
    <div className="space-y-4">
      {/* Select Dropdown */}
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => {
          const selectedItem = data.find((item) => item.id === value);
          setSelectedComponent(selectedItem ? selectedItem.component : null);
        }}
      >
        <SelectTrigger
          id={`${id}-selectTrigger`}
          aria-label={ariaLabel}
          className={`w-full max-w-xs rounded-full bg-white dark:bg-black ${className}`}
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>

        <SelectContent>
          {data.map((item) => (
            <SelectItem
              key={`${id}-selectTrigger_${item.id}_${item.description}`}
              value={item.id}
            >
              {item.description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Selected UI Component */}
      <div>{selectedComponent}</div>
    </div>
  );
}
