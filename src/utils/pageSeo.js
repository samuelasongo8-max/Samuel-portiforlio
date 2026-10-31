const socialImage = '/og-image.jpg';

export const pageSeo = {
  home: {
    path: '/',
    label: 'Home',
    title: 'Samuel Asongo | Artist and Music Educator in Kakuma, Kenya',
    description:
      'Discover Samuel Asongo, an artist and music educator in Kakuma, Kenya. Explore community arts, music education, web development, and connect for partnerships.',
    image: socialImage,
  },
  about: {
    path: '/about',
    label: 'About',
    title: 'About Samuel Asongo | Artist, Educator & Community',
    description:
      'Meet Samuel Asongo, an artist, music educator, developer, and community leader in Kakuma, Kenya. Explore his journey, experience, and work with AUVD today.',
    image: socialImage,
  },
  creative: {
    path: '/creative',
    label: 'Creative Arts',
    title: 'Samuel Asongo | Artist & Creative Portfolio in Kenya',
    description:
      'Explore Samuel Asongo’s art portfolio, featuring painting, drawing, mixed media, and community-centered visual storytelling about identity and resilience.',
    image: socialImage,
  },
  music: {
    path: '/music',
    label: 'Music Education',
    title: 'Samuel Asongo | Music Education Programs in Kakuma, Kenya',
    description:
      'Discover Samuel Asongo’s music education work in Kakuma, Kenya, serving more than 150 students through lessons, instruments, and performance opportunities.',
    image: socialImage,
  },
  development: {
    path: '/development',
    label: 'Web Development',
    title: 'Samuel Asongo | Web Development Portfolio in Kakuma',
    description:
      'Explore Samuel Asongo’s web development work, including responsive React applications and accessible digital tools built for real community needs. View work.',
    image: socialImage,
  },
  projects: {
    path: '/projects',
    label: 'Projects',
    title: 'Samuel Asongo | Creative & Technology Portfolio Projects',
    description:
      'Browse Samuel Asongo’s projects across art, music, web development, and community impact. Explore selected work and connect for collaboration in Kakuma, Kenya.',
    image: socialImage,
  },
  impact: {
    path: '/impact',
    label: 'Social Impact',
    title: 'Samuel Asongo | Community Impact Leader in Kakuma, Kenya',
    description:
      'Learn how Samuel Asongo and AUVD support community development in Kakuma through creative arts, music education, youth leadership, and skills programs.',
    image: socialImage,
  },
  auvd: {
    path: '/auvd',
    label: 'AUVD',
    title: 'Samuel Asongo | AUVD Founder & Community Impact Leader',
    description:
      'Learn how AUVD, founded by Samuel Asongo, supports communities through art, music, education, and technology in Kakuma. Explore its programs and community work.',
    image: socialImage,
  },
  ambassador: {
    path: '/ambassador',
    label: 'Ambassador',
    title: 'Samuel Asongo | TSF Music Education Ambassador in Kakuma',
    description:
      'Learn about Samuel Asongo’s ambassador work with the Transylvanian Symphony Foundation, connecting music education and performance opportunities in Kakuma.',
    image: socialImage,
  },
  experience: {
    path: '/experience',
    label: 'Experience',
    title: 'Samuel Asongo | Professional Experience & Leadership',
    description:
      'Review Samuel Asongo’s experience in art, music education, web development, and community leadership. Explore his work in Kakuma and connect about new roles.',
    image: socialImage,
  },
  stories: {
    path: '/stories',
    label: 'Stories',
    title: 'Samuel Asongo | Stories on Art, Music & Community Impact',
    description:
      'Read Samuel Asongo’s reflections on art, music education, technology, and community impact. Explore the ideas behind his work in Kakuma and AUVD today.',
    image: socialImage,
  },
  contact: {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Samuel Asongo | Collaboration & Opportunities',
    description:
      'Contact Samuel Asongo about creative collaborations, commissions, music education partnerships, web development, or community impact projects in Kakuma, Kenya.',
    image: socialImage,
  },
  news: {
    path: '/news',
    label: 'News',
    title: 'News & Articles | Samuel Asongo’s Work in Kakuma, Kenya',
    description:
      'Read articles about Samuel Asongo’s work in music education, visual arts, and community development in Kakuma, Kenya. Explore stories and connect with Samuel.',
    image: socialImage,
    ogType: 'website',
  },
  newsMusic: {
    path: '/news/samuel-asongo-teaching-music-kakuma',
    label: 'Teaching Music in Kakuma',
    title: 'Samuel Asongo: Teaching Music in Kakuma Refugee Camp',
    description:
      'Learn how music education can build skills, confidence, and connection for students in Kakuma, through Samuel Asongo’s community-focused teaching work.',
    image: socialImage,
    ogType: 'article',
  },
  newsArt: {
    path: '/news/art-changes-lives-kakuma-kenya',
    label: 'How Art Changes Lives in Kakuma',
    title: 'How Art Changes Lives in Kakuma, Kenya | Samuel Asongo',
    description:
      'Explore how visual arts can support expression, cultural storytelling, and shared learning in Kakuma, through the community arts work of Samuel Asongo.',
    image: socialImage,
    ogType: 'article',
  },
  newsAfricanMusic: {
    path: '/news/african-music-education-samuel-asongo',
    label: 'African Music Education',
    title: 'African Music Education: Samuel Asongo’s Story in Kakuma',
    description:
      'Discover Samuel Asongo’s perspective on African music education, student learning, cultural exchange, and community music programs in Kakuma, Kenya today.',
    image: socialImage,
    ogType: 'article',
  },
  notFound: {
    path: null,
    title: 'Page Not Found | Samuel Asongo',
    description:
      'The page you requested could not be found. Visit Samuel Asongo’s portfolio homepage to explore his work.',
    image: socialImage,
  },
};

export const publicRoutes = Object.values(pageSeo)
  .filter((page) => page.path !== null)
  .map(({ path }) => path);
