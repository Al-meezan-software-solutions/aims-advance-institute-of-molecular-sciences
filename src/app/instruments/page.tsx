import type { Metadata } from 'next';
import Instruments from '@/components/sections/Instruments';

export const metadata: Metadata = {
  title: 'Instruments — AIMS-PAGE',
  description:
    'State-of-the-art instruments and equipment available at AIMS-PAGE, including PCR systems, DNA sequencers, mass spectrometers, flow cytometers, and more.',
};

export default function InstrumentsPage() {
  return <Instruments />;
}
