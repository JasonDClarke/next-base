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

export function CheckboxGroupWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  data,
  disabled = false,
}: Props<Schema>) {
  const form = useFormContext();
  return (
    <>
      <FormField
        control={form.control}
        name={nameInSchema}
        render={({ field }) => {
          // Ensure field.value is always an array (default to empty array)
          const selectedValues: string[] = Array.isArray(field.value)
            ? field.value
            : [];
          return (
            <FormItem className="flex w-full flex-col items-start gap-2">
              <FormLabel className="mt-2 text-base" htmlFor={nameInSchema}>
                {fieldTitle}
              </FormLabel>

              <div className="flex flex-col items-start gap-2">
                {data.map((item) => {
                  const isChecked = selectedValues.includes(item.id);

                  return (
                    <div
                      key={`${nameInSchema}_${item.id}`}
                      className="flex items-center space-x-2"
                    >
                      <FormControl>
                        <Checkbox
                          className="bg-white dark:bg-black dark:data-[state=checked]:text-white"
                          id={`${nameInSchema}_${item.id}`}
                          checked={isChecked}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...selectedValues, item.id]
                              : selectedValues?.filter(
                                  (val: string) => val !== item.id
                                );

                            field.onChange(newValue);
                          }}
                          disabled={disabled}
                        />
                      </FormControl>
                      <Label htmlFor={`${nameInSchema}_${item.id}`}>
                        {item.description || item.id}
                      </Label>
                    </div>
                  );
                })}
              </div>
              {/* debugging - see storred output value */}
              {/* <p>{JSON.stringify(field.value)}</p> */}
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </>
  );
}
