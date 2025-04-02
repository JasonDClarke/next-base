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
import { Input } from '@/components/ui/input';
import { useEffect, useRef, useState } from 'react';

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

export function OtherCheckboxGroupWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  data,
  disabled = false,
}: Props<Schema>) {
  const form = useFormContext();
  const [otherText, setOtherText] = useState(''); // Track "Other" input value
  const [otherIsChecked, setOtherIsChecked] = useState(false);

  // Listen for local storage reset and set correct state for custom state.
  const isFirstRender = useRef(true);
  const {
    formState: { isDirty },
    watch,
  } = form;
  const watchedValueArray: string[] = watch(nameInSchema);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isDirty) {
      // ignore values that are matching the checkbox values, any remaining values should be the other value
      const otherValue = watchedValueArray.find(
        (value) => !data.map((x) => x.id).includes(value)
      );

      if (otherValue) {
        setOtherText(otherValue);
        setOtherIsChecked(true);
      }
    }
  }, [data, watchedValueArray, isDirty]);

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => {
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
                            : selectedValues.filter((val) => val !== item.id);

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

              {/* "Other" Option */}
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    className="bg-white dark:bg-black"
                    id={`${nameInSchema}_other`}
                    checked={otherIsChecked}
                    onCheckedChange={(checked) => {
                      const newValue = checked
                        ? [...selectedValues, otherText || '']
                        : selectedValues.filter((val) => val !== otherText);

                      field.onChange(newValue);
                      setOtherIsChecked(!otherIsChecked);
                    }}
                    disabled={disabled}
                  />
                </FormControl>
                <Label htmlFor={`${nameInSchema}_other`}>Other</Label>
              </div>

              {/* Show Input Field When "Other" is Selected */}
              {otherIsChecked && (
                <Input
                  placeholder="Please specify"
                  value={otherText}
                  onChange={(e) => {
                    const newText = e.target.value;
                    setOtherText(newText);

                    // Update form value dynamically
                    const filteredValues = selectedValues.filter(
                      (val) => val !== otherText
                    );
                    field.onChange(
                      newText ? [...filteredValues, newText] : filteredValues
                    );
                  }}
                />
              )}
            </div>

            {/* Debugging - See stored values */}
            {/* <p>{JSON.stringify(field.value)}</p> */}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
