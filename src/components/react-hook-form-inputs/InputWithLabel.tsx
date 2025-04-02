'use client';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props<Schema> = {
  fieldTitle: string | ReactNode;
  nameInSchema: keyof Schema & string;
  className?: string;
  labelClassName?: string;
  formItemClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  className,
  labelClassName,
  formItemClassName,
  ...props
}: Props<Schema>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className={cn(formItemClassName)}>
          <FormLabel
            className={cn('text-base', labelClassName)}
            htmlFor={nameInSchema}
          >
            {fieldTitle}
          </FormLabel>

          <FormControl>
            <Input
              id={nameInSchema}
              className={cn(
                `w-full max-w-xs bg-white disabled:text-blue-500 disabled:opacity-75 dark:bg-black dark:disabled:text-yellow-300 ${className}`
              )}
              {...props}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
