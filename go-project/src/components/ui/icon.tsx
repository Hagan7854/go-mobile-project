import { icons, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps{
    name: keyof typeof icons
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

// export default Icon;