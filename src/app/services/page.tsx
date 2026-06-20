import type { Metadata } from 'next';
import Services from '@/components/sections/Services';

export const metadata: Metadata = {
  title: 'Services — AIMS-PAGE',
  description:
    'Contract testing, research collaboration, regulatory support, and capacity-building services offered by AIMS-PAGE across pharmaceutical, agricultural, and environmental sectors.',
};

export default function ServicesPage() {
  return <Services />;
}
