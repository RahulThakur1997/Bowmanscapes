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

// 8 Primary Featured Services
export const SERVICES: ServiceItem[] = [
  {
    id: 'patios',
    number: '01',
    name: 'Patios',
    shortDesc: 'Porcelain, Indian sandstone, natural stone paving & garden terraces.',
    fullDesc: 'Custom-designed patios built with laser-leveled sub-bases, full mortar bed adhesion, and premium weather-resistant jointing. From contemporary porcelain to traditional riven Indian sandstone.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
    tag: 'Popular'
  },
  {
    id: 'driveways',
    number: '02',
    name: 'Driveways',
    shortDesc: 'Block paving, decorative gravel, resin & permeable driveway systems.',
    fullDesc: 'Heavy-duty vehicular driveways engineered with Type 1 MOT sub-bases, geotextile weed membranes, and secure concrete edge restraints to ensure zero sinking or rutting.',
    image: 'https://images.unsplash.com/photo-1584463699039-44e21d609cb5?auto=format&fit=crop&w=800&q=80',
    tag: 'Curb Appeal'
  },
  {
    id: 'fencing',
    number: '03',
    name: 'Fencing',
    shortDesc: 'Closeboard, featheredge, slatted panels & postcrete-anchored posts.',
    fullDesc: 'High-strength boundary fencing built to withstand North Yorkshire wind and rain. Concrete or pressure-treated timber posts set deep with gravel boards for ground protection.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80',
    tag: 'Durability'
  },
  {
    id: 'artificial-turf',
    number: '04',
    name: 'Artificial Turf',
    shortDesc: 'Year-round mud-free, child & dog friendly synthetic lawn installations.',
    fullDesc: 'High-density, multi-tone artificial turf installed over an excavated, compacted aggregate screed base with weed membrane and perimeter framework for crisp, clean longevity.',
    image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
    tag: 'Low Maintenance'
  },
  {
    id: 'turfing',
    number: '05',
    name: 'Turfing (Natural Lawn)',
    shortDesc: 'Rotavation, laser soil grading & fresh premium cultivated turf.',
    fullDesc: 'Lush, weed-free natural lawn replacements. We remove old tired sod, rotavate and enrich the soil with organic topsoil, level the gradient, and lay high-grade turf rolls with seamless seams.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    tag: 'Natural Lawn'
  },
  {
    id: 'decking',
    number: '06',
    name: 'Decking',
    shortDesc: 'Composite & pressure-treated timber decking with steps & balustrades.',
    fullDesc: 'Elevated outdoor living platforms, sun terraces, and garden walkways. Built on treated timber substructures with proper ground clearance, non-slip surfaces, and concealed fixings.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tag: 'Outdoor Living'
  },
  {
    id: 'gates',
    number: '07',
    name: 'Gates',
    shortDesc: 'Heavy-duty timber side gates, field gates & bespoke garden security.',
    fullDesc: 'Handcrafted timber side gates, courtyard gates, and pedestrian access gates supplied and fitted with galvanized heavy-duty hinges, ring latches, and keyed security locks.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80',
    tag: 'Security'
  },
  {
    id: 'general-building',
    number: '08',
    name: 'General Building',
    shortDesc: 'Brickwork, garden retaining walls, steps, coping stones & alterations.',
    fullDesc: 'Skilled domestic building work covering brick and block garden walls, decorative stone planters, structural retaining walls, steps, and general outdoor building maintenance.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tag: 'Structural'
  }
];

// Additional 4 Specialized Services (making all 12 complete)
export const ADDITIONAL_SERVICES = [
  {
    id: 'pressure-washing',
    name: 'High-Pressure Water Treatment',
    desc: 'Commercial jet washing to restore weathered stone, driveways, patios and decking back to original vibrance.'
  },
  {
    id: 'repointing',
    name: 'Repointing',
    desc: 'Specialist mortar rake-out and repointing for paving joints, garden brickwork, and stone retaining walls.'
  },
  {
    id: 'gutter-clearance',
    name: 'Gutter Clearance',
    desc: 'Thorough clearing of blocked residential gutters, downspouts, and debris removal to prevent water damage.'
  },
  {
    id: 'drainage',
    name: 'Drainage Solutions',
    desc: 'Aco channel drains, French soakaway drainage, and surface run-off solutions to eliminate waterlogging.'
  }
];

export const SERVICE_AREAS = [
  { name: 'Malton', tag: 'Town Centre & Residential' },
  { name: 'Norton-on-Derwent', tag: 'Primary Coverage' },
  { name: 'Pickering', tag: 'Surrounding Area' },
  { name: 'Helmsley', tag: 'Surrounding Area' },
  { name: 'Kirkbymoorside', tag: 'Surrounding Area' },
  { name: 'North Yorkshire Villages', tag: 'Full Local Service' }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Scope of Service',
    soloGuy: 'Usually limited to basic mowing or odd fencing jobs',
    bowmanscapes: 'Full landscaping & general building under one trusted contractor',
    nationalChains: 'Fragmented trades sub-contracted out to unknown 3rd parties'
  },
  {
    feature: 'Ground Preparation',
    soloGuy: 'Often skips proper excavation & sub-base depths',
    bowmanscapes: 'Engineered Type 1 sub-bases, geotextile membranes & full mortar beds',
    nationalChains: 'Varies wildly depending on which subcontractor is assigned'
  },
  {
    feature: 'Direct Communication',
    soloGuy: 'Hard to get hold of; missed calls & voicemails',
    bowmanscapes: 'Deal directly with Matt on site from initial quote to final inspection',
    nationalChains: 'Call centres, automated tickets & remote account managers'
  },
  {
    feature: 'Estimates & Pricing',
    soloGuy: 'Vague verbal estimates with hidden surprises',
    bowmanscapes: 'Free, clear, itemised quotes with no obligation',
    nationalChains: 'Inflated franchise overheads and high deposit demands'
  },
  {
    feature: 'Site Cleanliness',
    soloGuy: 'Leaves offcuts and rubble for the homeowner to skip',
    bowmanscapes: 'Clean and tidy site policy at the end of every working day',
    nationalChains: 'Skips left on drives for weeks after job completion'
  },
  {
    feature: 'Google Verified Reputation',
    soloGuy: 'Few or unverified online reviews',
    bowmanscapes: 'Flawless 5.0 Star Rating across 50 verified Google reviews',
    nationalChains: 'Mixed national averages with poor local accountability'
  }
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'featured-transformation',
  title: 'Porcelain Terrace, Retaining Wall & Turf Renovation',
  location: 'Malton, North Yorkshire',
  category: 'Patios & Landscaping',
  description: 'Complete outdoor renovation transforming an uneven sloping garden into an elegant porcelain entertaining patio, raised stone retaining wall, and freshly graded cultivated Yorkshire lawn.',
  beforeImage: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
  isFeatured: true
};

export const RECENT_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Indian Sandstone Patio & Integrated Drainage',
    location: 'Malton',
    category: 'Patios',
    beforeImage: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-2',
    title: 'Block Paved Driveway with Charcoal Border',
    location: 'Norton-on-Derwent',
    category: 'Driveways',
    beforeImage: 'https://images.unsplash.com/photo-1584463699039-44e21d609cb5?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584463699039-44e21d609cb5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-3',
    title: 'Closeboard Fencing & Custom Timber Gate',
    location: 'Malton Area',
    category: 'Fencing & Gates',
    beforeImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-4',
    title: 'Precision Turfing & Timber Sleeper Borders',
    location: 'North Yorkshire',
    category: 'Turfing',
    beforeImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dave H.',
    location: 'Malton',
    rating: 5,
    quote: 'Matt laid a brand new porcelain patio and rebuilt our garden wall. The standard of workmanship was exceptional from start to finish. He arrived on time every morning, kept the site spotless, and the transformation is first class.',
    serviceUsed: 'Porcelain Patio & Garden Wall',
    date: 'Verified Google Review',
    projectImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rev-2',
    author: 'Sarah W.',
    location: 'Norton-on-Derwent',
    rating: 5,
    quote: 'Huge thank you to Matt at Bowmanscapes. He replaced our old storm-damaged boundary fence and laid fresh cultivated turf. Polite, tidy, and finished right on schedule. Would recommend him without hesitation to anyone in Malton.',
    serviceUsed: 'Fencing & Turfing',
    date: 'Verified Google Review',
    projectImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rev-3',
    author: 'Mark P.',
    location: 'Malton Area',
    rating: 5,
    quote: 'Had Bowmanscapes install a block paved driveway and new side gate. Matt’s attention to detail on the levels and drainage was second to none. Transparent pricing from the free quote through to completion.',
    serviceUsed: 'Block Paved Driveway & Gate',
    date: 'Verified Google Review',
    projectImage: 'https://images.unsplash.com/photo-1584463699039-44e21d609cb5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'rev-4',
    author: 'Julie & Alan K.',
    location: 'North Yorkshire',
    rating: 5,
    quote: 'Superb job on our front patio and composite decking. Matt gave us great advice on the stone layout and fall for water run-off. Friendly, hard-working, and the 5.0 rating is thoroughly well-deserved.',
    serviceUsed: 'Front Patio & Decking',
    date: 'Verified Google Review',
    projectImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What areas do you cover?',
    answer: 'Bowmanscapes is based in Malton and covers Malton, Norton-on-Derwent, and the surrounding towns and villages across North Yorkshire.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer free quotes?',
    answer: 'Yes, all quotes are completely free and without obligation. Matt will visit your property, assess the ground and measurements, discuss your requirements, and provide a clear, detailed written estimate.'
  },
  {
    id: 'faq-3',
    question: 'What landscaping services do you provide?',
    answer: 'We provide full hard and soft landscaping: patios (porcelain and Indian sandstone), block paved driveways, timber and composite decking, closeboard fencing, bespoke wooden gates, artificial turf, fresh lawn turfing, pressure washing, repointing, and drainage.'
  },
  {
    id: 'faq-4',
    question: 'Do you undertake general building work?',
    answer: 'Yes! In addition to landscaping, Bowmanscapes provides domestic general building work, including garden brickwork, retaining walls, decorative steps, stone pointing, and property alterations.'
  },
  {
    id: 'faq-5',
    question: 'How do I arrange a quote or discuss a project?',
    answer: 'You can call Matt directly on 07910 062 207, email bowmanscapes@gmail.com, or submit a request through our online quote form right here on the website. We respond promptly to all enquiries.'
  }
];
