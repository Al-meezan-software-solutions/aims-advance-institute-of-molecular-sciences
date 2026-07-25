import Image from 'next/image';

interface AimsLogoProps {
  size?: number;
  className?: string;
}

export default function AimsLogo({
  size = 80,
  className = '',
}: AimsLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="AIMS-PAGE Logo"
      width={size}
      height={size}
      className={className}
      style={{ display: 'block', width: `${size}px`, height: 'auto' }}
      quality={100}
      priority
    />
  );
}
