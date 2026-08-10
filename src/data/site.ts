export const SITE = {
  name: 'M.M. Knitwear Ltd.',
  domain: 'https://www.mmknitwear.com',
  email: 'info@mmknitwear.com',
  mktEmail: 'bashir@mmknitwear.com',
  phoneHead: '+880 9666 768 768',
  phoneHeadRaw: '+8809666768768',
  phoneFactory: '+880 9666 791 791',
  phoneFactoryRaw: '+8809666791791',
  headOffice: 'House 16 (3rd Floor), Road 10, Sector 01, Uttara, Dhaka 1230, Bangladesh',
  factory: 'Ambagh Road, Nilnagar, Konabari, Gazipur 1700, Bangladesh',
  headOfficeMap:
    'https://www.google.com/maps/search/?api=1&query=House+16%2C+Road+10%2C+Sector+01%2C+Uttara+Model+Town%2C+Dhaka%2C+Bangladesh',
  factoryMap:
    'https://www.google.com/maps/search/?api=1&query=Ambagh+Road%2C+Konabari%2C+Gazipur%2C+Bangladesh',
  factoryEmbed:
    'https://www.google.com/maps?q=M.M.%20Knitwear%20Ltd.%2C%20Ambag%20Rd%2C%20Konabari%2C%20Gazipur%2C%20Bangladesh&output=embed',
};

export interface SocialLink {
  label: string;
  href: string;
  path: string;
}

export const socials: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mmknit',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/m-m-knitwear-ltd/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.065 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mmknitwear',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

export const certifications = [
  'RSC',
  'SEDEX',
  'AMFORI-BSCI',
  'RECYCLED-100',
  'ICS',
  'HIGG-INDEX',
  'OEKO-TEX-100',
  'STEP',
  'BCI',
  'ORGANIC',
  'GLOBAL-RECYCLED-STANDARD',
  'ORGANIC-100',
];

export const products = [
  'T-Shirts',
  'Polo Shirts',
  'Henley',
  'Joggers',
  'Leggings',
  'Bermuda',
  'Dresses',
  'Sweatshirts',
  'Vests',
  'Tank Tops',
  'Skirts',
  'Bodysuits',
  'Coveralls',
  'Nightwear',
  'Loungewear',
];

export const clientBrands = Array.from({ length: 18 }, (_, i) => i + 1);
