import type { Metadata } from 'next';
import CoreValues from '@/components/sections/CoreValues';

export const metadata: Metadata = {
  title: 'Core Values — AIMS-PAGE',
  description:
    'The core values that guide every analysis and collaboration at AIMS-PAGE: Trust, Excellence, and Innovation.',
};

export default function ValuesPage() {
  return <CoreValues />;
}
