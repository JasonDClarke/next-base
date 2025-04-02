'use client';

import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type DataObj = {
  id: string;
  description: string;
};

type Props<Schema> = {
  fieldTitle: string;
  nameInSchema: keyof Schema & string;
  data: DataObj[];
  disabled?: boolean;
};

export function RadioGroupWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  data,
  disabled = false,
}: Props<Schema>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col items-start gap-2">
          <FormLabel className="mt-2 text-base" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>

          <div className="flex items-center gap-2">
            <FormControl>
              <RadioGroup
                id={nameInSchema}
                {...field}
                value={field.value}
                onValueChange={field.onChange}
                disabled={disabled}
              >
                {data.map((item) => (
                  <div
                    key={`${nameInSchema}_${item.id}`}
                    className="flex items-center space-x-2"
                  >
                    <RadioGroupItem
                      className="bg-white dark:bg-black"
                      value={item.id}
                      id={`${nameInSchema}_${item.id}`}
                    />
                    <Label htmlFor={`${nameInSchema}_${item.id}`}>
                      {item.description || item.id}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
