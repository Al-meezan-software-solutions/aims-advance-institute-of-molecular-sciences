'use client';

import Image from 'next/image';

/** Single photorealistic laboratory hero — scientist examining through a microscope */
export default function HeroLabVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] overflow-hidden rounded-2xl lg:rounded-3xl">
      <Image
        src="/hero/hero-scientist-microscope.png"
        alt="Scientist examining a sample through a laboratory microscope"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-[center_30%]"
      />
    </div>
  );
}
