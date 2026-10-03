import {
  AwardIcon,
  BriefcaseIcon,
  FileTextIcon,
  GemIcon,
  HeadphonesIcon,
  HeartHandshakeIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  MonitorIcon,
  PenToolIcon,
  PhoneIcon,
  SmartphoneIcon,
  SmileIcon,
  SparklesIcon,
  UserRoundIcon,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
];

export const images = {
  hero: '/assets/back.png',
  office: 'https://cdn.magicpatterns.com/patterns/generated-images/be2b4ad4-17c8-4ce6-9bb5-8cd7958c8527.jpg',
  mission: 'https://cdn.magicpatterns.com/patterns/generated-images/be892416-25bb-4614-bfbd-710bac890525.jpg',
};

export const homeStats = [
  { icon: BriefcaseIcon, value: '100+', label: 'Projects Completed', tone: 'pink' },
  { icon: HeartHandshakeIcon, value: '50+', label: 'Happy Clients', tone: 'pink' },
  { icon: SmileIcon, value: '99%', label: 'Client Satisfaction', tone: 'pink' },
  { icon: HeadphonesIcon, value: '24/7', label: 'Support Available', tone: 'pink' },
];

export const aboutStats = [
  { icon: BriefcaseIcon, value: '100+', label: 'Projects Completed', tone: 'pink' },
  { icon: HeartHandshakeIcon, value: '50+', label: 'Happy Clients', tone: 'pink' },
  { icon: AwardIcon, value: '5+', label: 'Years Experience', tone: 'pink' },
  { icon: SmileIcon, value: '99%', label: 'Client Satisfaction', tone: 'pink' },
];

export const homeServices = [
  { icon: PenToolIcon, title: 'Graphic Design', description: 'Creative and professional designs for your brand.', tone: 'pink' },
  { icon: MonitorIcon, title: 'Website Design', description: 'Responsive and modern websites that convert.', tone: 'blue' },
  { icon: SmartphoneIcon, title: 'Social Media Design', description: 'Eye-catching posts and banners for your socials.', tone: 'pink' },
  { icon: SparklesIcon, title: 'Animation', description: 'Stunning animations that bring your ideas to life.', tone: 'pink' },
  { icon: GemIcon, title: 'Branding', description: 'Logos, identity & branding that represent you.', tone: 'pink' },
  { icon: FileTextIcon, title: 'Content Writing', description: 'Engaging content that connects with audience.', tone: 'blue' },
];

export const allServices = [
  { icon: PenToolIcon, title: 'Graphic Design', description: 'We create stunning visuals that communicate your message effectively.', tone: 'pink' },
  { icon: MonitorIcon, title: 'Website Design', description: 'Responsive, modern & user friendly websites that achieve results.', tone: 'blue' },
  { icon: SmartphoneIcon, title: 'Social Media Design', description: 'Engaging social media posts and banners that boost your brand.', tone: 'pink' },
  { icon: SparklesIcon, title: 'Animation', description: 'Dynamic animations that bring your ideas to life.', tone: 'blue' },
  { icon: GemIcon, title: 'Branding & Identity', description: 'We build unique brand identities that make you stand out.', tone: 'pink' },
  { icon: UserRoundIcon, title: 'Character Design', description: 'Custom characters for games, stories & brands.', tone: 'pink' },
  { icon: FileTextIcon, title: 'Content & Copywriting', description: 'Powerful content that connects with your audience.', tone: 'pink' },
  { icon: LayersIcon, title: 'UI/UX Design', description: 'User friendly designs that provide the best experience.', tone: 'pink' },
];

export const aboutPoints = [
  'Creative & Professional Team',
  'High Quality & On-Time Delivery',
  'Client Satisfaction is Our Priority',
  '24/7 Support & Communication',
];

export const portfolioFilters = ['All', 'Graphic Design', 'Web Design', 'Social Media', 'Branding', 'Animation'];

export const portfolioItems = [
  { title: 'Brand Identity Design', category: 'Branding', filter: 'Branding', image: 'https://cdn.magicpatterns.com/patterns/generated-images/0a92ab12-2d43-4ca9-9d0c-8206bf48fb4b.jpg' },
  { title: 'Website Design', category: 'Web Design', filter: 'Web Design', image: 'https://cdn.magicpatterns.com/patterns/generated-images/a0bf0a15-01a4-412b-b195-79c5dae8af84.jpg' },
  { title: 'Social Media Post', category: 'Social Media', filter: 'Social Media', image: 'https://cdn.magicpatterns.com/patterns/generated-images/2146550c-eab7-4918-81d0-4d7755a8ad6a.jpg' },
  { title: 'Product Poster Design', category: 'Graphic Design', filter: 'Graphic Design', image: 'https://cdn.magicpatterns.com/patterns/generated-images/8918f984-b24f-44d1-83e0-3b0f420aa2a0.jpg' },
  { title: 'Gaming Character', category: 'Character Design', filter: 'Graphic Design', image: 'https://cdn.magicpatterns.com/patterns/generated-images/23dd2dba-f268-47ca-9262-0c4176fb2d0c.jpg' },
  { title: 'Motion Graphics', category: 'Animation', filter: 'Animation', image: 'https://cdn.magicpatterns.com/patterns/generated-images/d7cf61c5-5c6e-4229-b382-371df7e60448.jpg' },
];

export const contactInfo = [
  { icon: MailIcon, label: 'Email', value: 'info@artixtechsolution.com', href: 'mailto:info@artixtechsolution.com' },
  { icon: PhoneIcon, label: 'Phone', value: '+92 300 1234567', href: 'tel:+923001234567' },
  { icon: MapPinIcon, label: 'Location', value: 'Pakistan', href: '' },
];

export const footerServices = ['Graphic Design', 'Website Design', 'Social Media Design', 'Animation', 'Branding'];
