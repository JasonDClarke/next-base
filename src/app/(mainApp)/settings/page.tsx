import { ColorModeToggle } from '@/components/ColorModeToggle';

export const metadata = {
  title: 'Global Settings',
};

export default async function Settings() {
  return (
    <>
      <div className="flex items-center gap-1">
        <ColorModeToggle />
        <p>Toggle dark mode</p>
      </div>
    </>
  );
}
