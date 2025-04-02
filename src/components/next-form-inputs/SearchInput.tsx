import Form from 'next/form';
import { Input } from '@/components/ui/input';
import SearchButton from '@/components/buttons/SearchButton';

export const SearchInput = ({
  action,
  placeholder,
}: {
  action: string;
  placeholder: string;
}) => (
  <Form action={action} className="flex items-center gap-2">
    <Input
      name="searchText"
      type="text"
      placeholder={placeholder}
      className="w-full bg-white dark:bg-black"
      autoFocus
    />
    <SearchButton />
  </Form>
);
