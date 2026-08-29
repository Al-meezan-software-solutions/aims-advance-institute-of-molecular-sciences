/** Shared site contact details — keep Contact page & Footer in sync. */

export const SITE_CONTACT = {
  email: 'info@aims-page.org',
  phoneDisplay: '+92 301 4692761',
  phoneTel: '+923014692761',
  addressLines: [
    'House # 58, B Block',
    'OPF Housing Society',
    'Lahore, Pakistan',
  ],
  addressSingle: 'House # 58, B Block, OPF Housing Society, Lahore',
  /** 31°25'28.6"N 74°14'28.7"E */
  lat: 31.424611,
  lng: 74.241306,
} as const;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${SITE_CONTACT.lat},${SITE_CONTACT.lng}&z=17&output=embed`;

export const MAPS_EXTERNAL_URL = `https://www.google.com/maps?q=${SITE_CONTACT.lat},${SITE_CONTACT.lng}`;
