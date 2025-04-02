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

export function OtherRadioGroupWithLabel<Schema>({
  fieldTitle,
  nameInSchema,
  data,
  disabled = false,
}: Props<Schema>) {
  const form = useFormContext();
  const fieldValue = form.watch(nameInSchema);

  const [otherIsSelected, setOtherIsSelected] = useState(false);

  const [otherText, setOtherText] = useState(fieldValue || '');

  // Listen for local storage reset and set correct state for custom state.
  const {
    formState: { isDirty },
  } = form;
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isDirty) {
      const isIotherSelectedInitially =
        !data.map((x) => x.id).includes(fieldValue) && !(fieldValue === '');
      setOtherText(fieldValue);
      setOtherIsSelected(isIotherSelectedInitially);
    }
  }, [data, fieldValue, isDirty]);

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col items-start gap-2">
          <FormLabel className="mt-2 text-base" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>

          <FormControl>
            <RadioGroup
              id={nameInSchema}
              value={field.value}
              onValueChange={(value) => {
                if (data.map((x) => x.id).includes(value)) {
                  setOtherText(''); // Reset other text if different option is selected
                  field.onChange(value);
                  setOtherIsSelected(false);
                  // radio selection only of other, avoid edge case where 'other' value is typed
                } else if (value === 'other' && !otherIsSelected) {
                  setOtherText('');
                  field.onChange('');
                  setOtherIsSelected(true);
                } else {
                  field.onChange(otherText || ''); // Use existing other text
                }
              }}
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

              {/* "Other" Option */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="bg-white dark:bg-black"
                  value="other"
                  id={`${nameInSchema}_other`}
                  checked={otherIsSelected}
                />
                <Label htmlFor={`${nameInSchema}_other`}>Other</Label>
              </div>

              {/* Show Input Field When "Other" is Selected */}
              {otherIsSelected && (
                <Input
                  placeholder="Please specify"
                  value={otherText}
                  onChange={(e) => {
                    const newText = e.target.value;
                    setOtherText(newText);
                    field.onChange(newText);
                  }}
                />
              )}
            </RadioGroup>
          </FormControl>
          {/* debugging - see storred output value */}
          {/* <p>{JSON.stringify(otherIsSelected)}</p>
          <p>{JSON.stringify(field.value)}</p> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
