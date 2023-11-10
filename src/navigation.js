import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Case Studies',
      href: getPermalink('/#case-studies'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
  ],
  actions: [{ text: 'Work With Us', href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Services', href: getPermalink('/#services') },
        {
          text: 'Case Studies',
          href: getPermalink('/#case-studies'),
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/innotek-kft'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/innotekhq' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Innotek KFT. All rights reserved.`,
}
