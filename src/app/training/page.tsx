import type { Metadata } from 'next';
import Training from '@/components/sections/Training';

export const metadata: Metadata = {
  title: 'Training — AIMS-PAGE',
  description:
    'Professional training programs in molecular diagnostics, bioinformatics, and laboratory techniques offered by AIMS-PAGE to researchers, students, and industry professionals.',
};

export default function TrainingPage() {
  return <Training />;
}
