'use client';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

type Props<Schema> = {
  fieldTitle: string;
  nameInSchema: keyof Schema & string;
  message: string;
  disabled?: boolean;
};

export function CheckboxWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  message,
  disabled = false,
}: Props<Schema>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="flex w-full items-center gap-2">
          <FormLabel className="mt-2 w-1/3 text-base" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>

          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                className="bg-white dark:bg-black"
                id={nameInSchema}
                {...field}
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            {message}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
