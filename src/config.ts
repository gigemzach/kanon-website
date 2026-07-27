// Single source of truth for facts that change.
//
// TSBPA_FIRM_LICENSED gates the firm-status language sitewide.
//
//   false -> the site describes services as provided BY a licensed CPA, and renders the
//            disclaimer required by 22 TAC 501.81(c) for a CPA associated with an
//            unlicensed entity.
//   true  -> the site may describe Kanon Tax & Advisory as a licensed CPA firm and the
//            disclaimer is removed.
//
// Flip this to true ONLY after TSBPA approves the sole-proprietorship firm registration
// and issues the firm license. Until then it must stay false.
export const TSBPA_FIRM_LICENSED = false;

export const FIRM = {
  name: 'Kanon Tax & Advisory',
  // Address published on the website. It is never emitted as a plaintext
  // mailto: in the served HTML — the contact page assembles it in the browser
  // from data attributes, so a harvester reading the source finds nothing.
  // Change it here and it updates everywhere it appears.
  publicEmail: 'info@kanonadvisory.com',
  phone: '713-561-3888',
  phoneE164: '+17135613888',
  fax: '346-250-4817',
  city: 'Houston',
  state: 'TX',
  formspree: 'https://formspree.io/f/maqlrlap',
  legalUpdated: 'July 26, 2026',
};
