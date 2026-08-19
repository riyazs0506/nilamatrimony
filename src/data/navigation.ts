export interface NavigationItem {
  id: string;
  label: string;
  labelTa: string;
  path: string;
}

export const navigation: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    labelTa: 'முகப்பு',
    path: '/',
  },
  {
    id: 'about',
    label: 'About Us',
    labelTa: 'எங்களை பற்றி',
    path: '/about',
  },
  {
    id: 'how-it-works',
    label: 'How It Works',
    labelTa: 'எப்படி செயல்படுகிறது',
    path: '/how-it-works',
  },
  {
    id: 'why-choose-us',
    label: 'Why Choose Us',
    labelTa: 'ஏன் நாங்கள்',
    path: '/why-choose-us',
  },
  {
    id: 'stories',
    label: 'Success Stories',
    labelTa: 'வெற்றிக் கதைகள்',
    path: '/success-stories',
  },
  {
    id: 'blog',
    label: 'Blog',
    labelTa: 'வலைப்பதிவு',
    path: '/blog',
  },
  {
    id: 'faq',
    label: 'FAQ',
    labelTa: 'கேள்விகள்',
    path: '/faq',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    labelTa: 'தொடர்பு கொள்ள',
    path: '/contact',
  },
];

/**
 * Find a navigation item by its ID.
 */
export const getNavigationItem = (
 id: string,
): NavigationItem | undefined => {
  return navigation.find((item) => item.id === id);
};

/**
 * Check whether a navigation ID exists.
 */
export const isValidNavigationId = (id: string): boolean => {
  return navigation.some((item) => item.id === id);
};