import type { Metadata } from 'next';
import MissionVision from '@/components/sections/MissionVision';

export const metadata: Metadata = {
  title: 'Mission & Vision — AIMS-PAGE',
  description:
    'Our mission and vision: advancing molecular science to protect food safety, pharmaceutical integrity, and environmental health across Pakistan and beyond.',
};

export default function MissionPage() {
  return <MissionVision />;
}
