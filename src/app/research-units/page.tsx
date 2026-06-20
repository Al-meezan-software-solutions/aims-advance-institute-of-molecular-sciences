import type { Metadata } from 'next';
import ResearchUnits from '@/components/sections/ResearchUnits';

export const metadata: Metadata = {
  title: 'Research Units — AIMS-PAGE',
  description:
    'Explore the five specialist research units at AIMS-PAGE covering Genomics, Agri-Biotechnology, Pharmaceutical Analysis, Environmental Microbiology, and Bioinformatics.',
};

export default function ResearchUnitsPage() {
  return <ResearchUnits />;
}
