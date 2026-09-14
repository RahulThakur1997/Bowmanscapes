import { ServiceItem, ComparisonRow, ProjectItem, ReviewItem, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Bowmanscapes',
  tagline: 'Landscaping. Done Properly.',
  subtitle: 'Landscaping & General Building',
  location: 'Malton, North Yorkshire, UK',
  serviceArea: 'Malton and surrounding areas',
  phone: '07910 062 207',
  phoneClean: '07910062207',
  email: 'bowmanscapes@gmail.com',
  rating: 5.0,
  reviewCount: 50,
  hours: 'Monday – Saturday: 8:00am – 4:00pm',
  owner: 'Matt',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bowmanscapes&query_place_id=ChIJTfMsZPQrf0gRKJzQOFv5zDw',
  facebookUrl: 'https://www.facebook.com/bowmanscapes/',
  instagramUrl: 'https://www.instagram.com/bowmanscapes/'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'patios',
    number: '01',
    name: 'Patios',
    shortDesc: 'Porcelain, Indian sandstone, natural stone paving and garden terraces.',
    fullDesc: 'Patio and paving projects designed to suit the property, with a clean, finished look that lasts.',
    image: '/images/svc-patios.jpg',
    tag: 'Patios'
  },
  {
    id: 'driveways',
    number: '02',
    name: 'Driveways',
    shortDesc: 'Block paving, decorative gravel, resin and practical driveway finishes.',
    fullDesc: 'Driveway installations built for everyday use, kerb appeal and a tidy, professional finish.',
    image: '/images/svc-driveways.jpg',
    tag: 'Driveways'
  },
  {
    id: 'fencing',
    number: '03',
    name: 'Fencing',
    shortDesc: 'Closeboard, featheredge, slatted panels and securely set posts.',
    fullDesc: 'Garden and boundary fencing fitted to look neat, last well and sit properly on the ground.',
    image: '/images/svc-fencing.jpg',
    tag: 'Fencing'
  },
  {
    id: 'artificial-turf',
    number: '04',
    name: 'Artificial Turf',
    shortDesc: 'Low-maintenance artificial grass for gardens, play areas and family spaces.',
    fullDesc: 'Artificial turf installations finished with a clean edge and a practical, year-round surface.',
    image: '/images/svc-artificial.jpg',
    tag: 'Artificial Turf'
  },
  {
    id: 'turfing',
    number: '05',
    name: 'Natural Turf',
    shortDesc: 'Ground preparation, levelling and freshly laid natural turf.',
    fullDesc: 'Natural turfing with proper preparation so the lawn has the best chance of establishing well.',
    image: '/images/svc-turf.jpg',
    tag: 'Turfing'
  },
  {
    id: 'decking',
    number: '06',
    name: 'Decking',
    shortDesc: 'Timber and composite decking for entertaining, steps and outdoor living.',
    fullDesc: 'Garden decking built to be stable, usable and finished to a high standard.',
    image: '/images/svc-decking.jpg',
    tag: 'Decking'
  },
  {
    id: 'gates',
    number: '07',
    name: 'Gates',
    shortDesc: 'Timber side gates, garden gates and matching entrance work.',
    fullDesc: 'Gates supplied and fitted to match fencing, access and the look of the property.',
    image: '/images/svc-gates.jpg',
    tag: 'Gates'
  },
  {
    id: 'general-building',
    number: '08',
    name: 'General Building',
    shortDesc: 'Brickwork, garden walls, steps, pointing and outdoor building work.',
    fullDesc: 'Practical general building alongside landscaping, from garden walls to finishing details.',
    image: '/images/svc-building.jpg',
    tag: 'Building'
  }
];

export const ADDITIONAL_SERVICES = [
  {
    id: 'pressure-washing',
    name: 'High-Pressure Water Treatment',
    desc: 'Restoring weathered stone, driveways, patios and decking.',
    image: '/images/svc-pressure.jpg'
  },
  {
    id: 'repointing',
    name: 'Repointing',
    desc: 'Mortar and joint work for paving, brickwork and garden walls.',
    image: '/images/svc-repointing.jpg'
  },
  {
    id: 'gutter-clearance',
    name: 'Gutter Clearance',
    desc: 'Clearing gutters and downpipes to keep water flowing as it should.',
    image: '/images/svc-gutters.jpg'
  },
  {
    id: 'drainage',
    name: 'Drainage',
    desc: 'Practical drainage help to reduce standing water and run-off issues.',
    image: '/images/svc-drainage.jpg'
  }
];

export const SERVICE_AREAS = [
  { name: 'Malton', tag: 'Based Here' },
  { name: 'Norton-on-Derwent', tag: 'Local Coverage' },
  { name: 'Pickering', tag: 'Surrounding Area' },
  { name: 'Helmsley', tag: 'Surrounding Area' },
  { name: 'Kirkbymoorside', tag: 'Surrounding Area' },
  { name: 'North Yorkshire Villages', tag: 'Surrounding Areas' }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Reliable Service',
    soloGuy: 'Can be difficult to book or follow up',
    bowmanscapes: 'Local Malton service with a straightforward approach',
    nationalChains: 'Remote booking with little local presence'
  },
  {
    feature: 'Professional Workmanship',
    soloGuy: 'Finish can vary from job to job',
    bowmanscapes: 'Careful installation and a professional finish',
    nationalChains: 'Quality depends on who is sent to site'
  },
  {
    feature: 'Clear Communication',
    soloGuy: 'Slow replies and unclear next steps',
    bowmanscapes: 'Direct contact from quote through to completion',
    nationalChains: 'Call centres and ticket systems'
  },
  {
    feature: 'Free Quotes',
    soloGuy: 'Estimates can be vague or informal',
    bowmanscapes: 'Free quotes with no obligation',
    nationalChains: 'Sales-led quotes with extra overhead'
  },
  {
    feature: 'Wide Range Of Services',
    soloGuy: 'Often limited to one type of job',
    bowmanscapes: 'Landscaping and general building in one place',
    nationalChains: 'Split across multiple subcontracted trades'
  },
  {
    feature: 'Local Malton Service',
    soloGuy: 'May travel in from further afield',
    bowmanscapes: 'Based in Malton and surrounding areas',
    nationalChains: 'National brand with limited local accountability'
  }
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'featured-transformation',
  title: 'Patio, Garden Levels & Turf',
  location: 'Malton & Surrounding Areas',
  category: 'Garden Transformations',
  description: 'Typical of the outdoor work Bowmanscapes takes on: a usable patio, better levels, and a finished garden that looks considered rather than rushed.',
  beforeImage: '/images/feat-before.jpg',
  afterImage: '/images/feat-after.jpg',
  isFeatured: true
};

export const RECENT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Patio & Paving',
    location: 'Malton Area',
    category: 'Patios',
    beforeImage: '/images/svc-patios.jpg',
    afterImage: '/images/svc-patios.jpg'
  },
  {
    id: 'proj-2',
    title: 'Driveway Installation',
    location: 'Malton Area',
    category: 'Driveways',
    beforeImage: '/images/svc-driveways.jpg',
    afterImage: '/images/svc-driveways.jpg'
  },
  {
    id: 'proj-3',
    title: 'Fencing & Gate Work',
    location: 'Malton Area',
    category: 'Fencing',
    beforeImage: '/images/svc-fencing.jpg',
    afterImage: '/images/svc-gates.jpg'
  },
  {
    id: 'proj-4',
    title: 'Decking & Outdoor Finish',
    location: 'Malton Area',
    category: 'Decking',
    beforeImage: '/images/svc-decking.jpg',
    afterImage: '/images/svc-decking.jpg'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Google Review',
    location: 'Malton',
    rating: 5,
    quote: 'Professional workmanship and a tidy finish. Easy to deal with from the first conversation through to the completed job.',
    serviceUsed: 'Landscaping',
    date: '5.0 Google Rating',
    projectImage: '/images/svc-patios.jpg'
  },
  {
    id: 'rev-2',
    author: 'Google Review',
    location: 'Malton Area',
    rating: 5,
    quote: 'Clear communication, reliable service, and the outdoor space looks properly finished rather than rushed.',
    serviceUsed: 'Fencing & Turfing',
    date: '50 Google Reviews',
    projectImage: '/images/svc-fencing.jpg'
  },
  {
    id: 'rev-3',
    author: 'Google Review',
    location: 'Surrounding Areas',
    rating: 5,
    quote: 'A local business that takes the work seriously. Quote was straightforward and the finished result speaks for itself.',
    serviceUsed: 'Driveways & Gates',
    date: 'Verified Google Review',
    projectImage: '/images/svc-driveways.jpg'
  },
  {
    id: 'rev-4',
    author: 'Google Review',
    location: 'North Yorkshire',
    rating: 5,
    quote: 'Landscaping and general building handled in one place. Helpful, tidy on site, and the job was done properly.',
    serviceUsed: 'Patio & Decking',
    date: 'Verified Google Review',
    projectImage: '/images/svc-decking.jpg'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What areas do you cover?',
    answer: 'Bowmanscapes is based in Malton and covers Malton, Norton-on-Derwent, and the surrounding towns and villages.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer free quotes?',
    answer: 'Yes. Quotes are free and without obligation. We will look at the work required, talk through the options, and provide a clear estimate.'
  },
  {
    id: 'faq-3',
    question: 'What landscaping services do you provide?',
    answer: 'Patios, driveways, fencing, artificial turf, natural turfing, decking, gates, high-pressure water treatment, repointing, gutter clearance and drainage.'
  },
  {
    id: 'faq-4',
    question: 'Do you undertake general building work?',
    answer: 'Yes. Alongside landscaping, Bowmanscapes carries out general building work such as garden brickwork, walls, steps and related outdoor building jobs.'
  },
  {
    id: 'faq-5',
    question: 'How do I arrange a quote or discuss a project?',
    answer: 'Call 07910 062 207, email bowmanscapes@gmail.com, or send the details through the quote form on this website.'
  }
];
