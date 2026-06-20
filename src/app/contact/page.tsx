import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact — AIMS-PAGE',
  description:
    'Get in touch with AIMS-PAGE for contract testing inquiries, research collaborations, training enrolment, or general questions.',
};

export default function ContactPage() {
  return <Contact />;
}
