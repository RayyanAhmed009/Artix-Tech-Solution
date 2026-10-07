import {
  AwardIcon,
  BadgeIcon,
  BriefcaseIcon,
  ClapperboardIcon,
  CodeXmlIcon,
  FileTextIcon,
  GemIcon,
  HeadphonesIcon,
  HeartHandshakeIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  MegaphoneIcon,
  MonitorIcon,
  PenToolIcon,
  PhoneIcon,
  SmartphoneIcon,
  SmileIcon,
  SparklesIcon,
  SquareTextIcon,
  UserRoundIcon,
  VideoIcon,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact Us', to: '/contact' },
];

export const images = {
  // hero: '/assets/back.png',
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
  {
    icon: PenToolIcon,
    title: 'Graphic Designing',
    description: 'Creative and professional graphics that make your brand stand out.',
    tone: 'blue',
  },
  {
    icon: MonitorIcon,
    title: 'Web Designing',
    description: 'Modern, responsive, and user-friendly websites designed to engage visitors.',
    tone: 'pink',
  },
  {
    icon: CodeXmlIcon,
    title: 'Web Development',
    description: 'Fast, scalable, and powerful websites built with modern technologies.',
    tone: 'silver',
  },
  {
    icon: VideoIcon,
    title: 'Video Editing',
    description: 'Professional video editing with smooth transitions and engaging visual effects.',
    tone: 'blue',
  },
  {
    icon: SmartphoneIcon,
    title: 'App Development',
    description: 'Modern and intuitive mobile apps built for seamless user experiences.',
    tone: 'pink',
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions that grow your reach and drive results.',
    tone: 'silver',
  },
];


export const allServices = [
  {
    icon: PenToolIcon,
    title: 'Graphic Designing',
    description: 'Creative and professional graphics that make your brand stand out.',
    tone: 'blue',
  },
  {
    icon: MonitorIcon,
    title: 'Web Designing',
    description: 'Modern, responsive, and user-friendly websites designed to engage visitors.',
    tone: 'pink',
  },
  {
    icon: CodeXmlIcon,
    title: 'Web Development',
    description: 'Fast, scalable, and powerful websites built with modern technologies.',
    tone: 'silver',
  },
  {
    icon: VideoIcon,
    title: 'Video Editing',
    description: 'Professional video editing with smooth transitions and engaging visual effects.',
    tone: 'blue',
  },
  {
    icon: ClapperboardIcon,
    title: 'Content Creator',
    description: 'Creative and engaging content that captures attention and builds your online presence.',
    tone: 'pink',
  },
  {
    icon: SquareTextIcon,
    title: 'Content & Copywriting',
    description: 'Clear and compelling content that connects with your audience and drives engagement.',
    tone: 'silver',
  },
  {
    icon: AwardIcon,
    title: 'Branding',
    description: 'Strong brand identities that create recognition and leave a lasting impression.',
    tone: 'blue',
  },
  {
    icon: SmartphoneIcon,
    title: 'App Development',
    description: 'Modern and intuitive mobile apps built for seamless and engaging user experiences.',
    tone: 'pink',
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions that expand your reach and drive real results.',
    tone: 'silver',
  },
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
  // { icon: PhoneIcon, label: 'Phone', value: '+92 300 1234567', href: 'tel:+923001234567' },
  // { icon: MapPinIcon, label: 'Location', value: 'Pakistan', href: '' },
];

export const footerServices = ['Graphic Designing', 'Web Designing', 'Video Editing', 'Web Development', 'Digital Marketing'];
