import type { Metadata } from 'next';
import About from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About — AIMS-PAGE',
  description:
    'Learn about the Advanced Institute of Molecular Sciences — a multidisciplinary research and testing laboratory bridging molecular science and real-world industry needs.',
};

export default function AboutPage() {
  return <About />;
}
