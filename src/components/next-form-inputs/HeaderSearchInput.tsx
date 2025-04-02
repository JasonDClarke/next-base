import Form from 'next/form';
import { Input } from '@/components/ui/input';
import SearchIconButton from '@/components/buttons/SearchIconButton';

export const HeaderSearchInput = ({
  action,
  placeholder,
}: {
  action: string;
  placeholder: string;
}) => (
  <Form action={action} className="flex w-full items-center gap-2 md:w-auto">
    <div className="relative w-full">
      <Input
        name="searchText"
        type="text"
        placeholder={placeholder}
        className="w-full min-w-40 rounded-full bg-white pr-10 dark:bg-black md:w-60"
      />
      <SearchIconButton className="absolute right-3 top-1.5" />
    </div>
  </Form>
);
