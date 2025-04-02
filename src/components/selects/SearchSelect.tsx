'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import clsx from 'clsx';
import { useState } from 'react';

type DataObj = {
  id: string;
  description: string;
  subDescription: string;
};

export const SearchSelect = ({
  action,
  placeholder,
  data,
  className,
  ariaLabel,
}: {
  action: string;
  placeholder: string;
  data: DataObj[];
  className?: string | string[];
  ariaLabel: string;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );

  const currentItem = selectedOption
    ? data.find(({ id }) => id === selectedOption)
    : undefined;

  const ItemTemplate = ({ item }: { item: DataObj }) => (
    <>
      <p>{item.description}</p>
      {item.subDescription ? <p>{item.subDescription}</p> : undefined}
    </>
  );

  const getItem = (item: DataObj) => (
    <SelectItem key={`${action}-selectTrigger_${item.id}`} value={item.id}>
      <ItemTemplate item={item} />
    </SelectItem>
  );

  return (
    <Select
      value={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
      }}
    >
      <SelectTrigger
        id={`${action}-selectTrigger`}
        aria-label={ariaLabel}
        className={clsx(
          `w-full max-w-xs rounded-full bg-white dark:bg-black ${className}`
        )}
      >
        <SelectValue placeholder={placeholder}>
          {currentItem ? <ItemTemplate item={currentItem} /> : null}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>{data.map(getItem)}</SelectContent>
    </Select>
  );
};
