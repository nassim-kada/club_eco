
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  image?: string;
  featured?: boolean;
}

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Sustainable Future: Our First Community Garden Project',
    excerpt: 'Discover how our members came together to create a thriving community garden that promotes sustainability and brings our neighborhood closer.',
    category: 'Community',
    date: 'Nov 5, 2025',
    readTime: '5 min read',
    author: 'Sarah Chen',
    authorRole: 'Community Lead',
    authorImage: '/api/placeholder/100/100',
    image: 'https://res.cloudinary.com/di8eubnmj/image/upload/v1762770416/doctor-app/vutcju2xv5jwlhjkjyyb.jpg',
    featured: true,
    content: `
      <p class="text-lg leading-relaxed mb-6">When we first envisioned the Eco Zone Club community garden, we knew it would be more than just a place to grow vegetables. It would become a testament to what passionate individuals can achieve when they come together with a shared vision for sustainability.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">The Beginning of a Green Dream</h2>
      <p class="text-lg leading-relaxed mb-6">It all started with a conversation during one of our monthly meetups. Sarah, one of our founding members, mentioned how she missed having access to fresh, organic produce. Within minutes, the idea evolved from a simple wish to a concrete plan.</p>

      <p class="text-lg leading-relaxed mb-6">We secured a plot of unused land in the heart of our neighborhood, and over 50 members volunteered their time, tools, and expertise. From architects who designed the layout to botanists who selected the perfect crops for our climate, everyone brought something valuable to the table.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">Challenges We Overcame</h2>
      <p class="text-lg leading-relaxed mb-6">The journey wasn't without its obstacles. We faced issues with soil quality, dealt with unexpected weather patterns, and navigated the complexities of community permits. But each challenge only strengthened our resolve and brought us closer together.</p>

      <p class="text-lg leading-relaxed mb-6">One of our members, James, an environmental engineer, developed an innovative rainwater collection system that now irrigates the entire garden. Another member, Maria, organized weekly workshops teaching sustainable gardening practices to local schools.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">The Impact Today</h2>
      <p class="text-lg leading-relaxed mb-6">Six months later, our community garden is thriving. We've harvested over 500 pounds of organic produce, which we distribute among members and donate to local food banks. More importantly, we've created a space where neighbors become friends, and strangers become family.</p>

      <p class="text-lg leading-relaxed mb-6">The garden hosts weekly gatherings, children's educational programs, and has become a model for other communities looking to start similar initiatives. What began as a simple idea has blossomed into a movement that's changing our neighborhood one seed at a time.</p>
    `
  },
  {
    id: '2',
    title: 'Innovation Workshop: Turning Ideas into Reality',
    excerpt: 'Learn about our latest innovation workshop where members pitched their ideas and received mentorship from industry leaders.',
    category: 'Events',
    date: 'Nov 3, 2025',
    readTime: '4 min read',
    author: 'Michael Rodriguez',
    authorRole: 'Events Coordinator',
    authorImage: '/api/placeholder/100/100',
    image: '/api/placeholder/1200/600',
    featured: false,
    content: `
      <p class="text-lg leading-relaxed mb-6">Our Innovation Workshop brought together aspiring entrepreneurs, creative thinkers, and industry mentors for an intensive day of idea development and pitching practice.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">The Power of Collaboration</h2>
      <p class="text-lg leading-relaxed mb-6">Over 40 participants gathered to share their vision for the future. From sustainable tech solutions to community-driven apps, the diversity of ideas was truly inspiring.</p>

      <p class="text-lg leading-relaxed mb-6">Mentors from leading tech companies provided invaluable feedback, helping refine business models and pitch strategies. Several participants left with concrete next steps and new connections that will help bring their ideas to life.</p>
    `
  },
  {
    id: '3',
    title: 'Member Spotlight: Sarah Chen\'s Journey to Tech Leadership',
    excerpt: 'An inspiring story of how EZC helped Sarah transition from a junior developer to leading her own startup.',
    category: 'Members',
    date: 'Oct 28, 2025',
    readTime: '6 min read',
    author: 'David Thompson',
    authorRole: 'Content Writer',
    authorImage: '/api/placeholder/100/100',
    image: '/api/placeholder/1200/600',
    featured: false,
    content: `
      <p class="text-lg leading-relaxed mb-6">Sarah Chen's story is one of determination, community support, and continuous learning. When she joined Eco Zone Club two years ago, she was a junior developer looking to expand her skills.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">From Member to Leader</h2>
      <p class="text-lg leading-relaxed mb-6">Through our mentorship program and skill-building workshops, Sarah honed her technical abilities while developing leadership skills. She organized study groups, led coding workshops, and eventually launched her own startup focused on sustainable tech solutions.</p>

      <p class="text-lg leading-relaxed mb-6">Today, her company employs five people and is making a real impact in the green technology space. Sarah credits the EZC community for providing the support, connections, and confidence she needed to take that leap.</p>
    `
  },
  {
    id: '4',
    title: 'Upcoming: Green Technology Hackathon 2025',
    excerpt: 'Join us for our biggest event of the year! 48 hours of innovation, collaboration, and sustainable tech solutions.',
    category: 'Events',
    date: 'Oct 25, 2025',
    readTime: '3 min read',
    author: 'Emma Wilson',
    authorRole: 'Event Manager',
    authorImage: '/api/placeholder/100/100',
    image: '/api/placeholder/1200/600',
    featured: true,
    content: `
      <p class="text-lg leading-relaxed mb-6">Get ready for the most exciting event of the year! Our Green Technology Hackathon brings together developers, designers, and environmental advocates for 48 hours of intensive innovation.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">What to Expect</h2>
      <p class="text-lg leading-relaxed mb-6">Teams will tackle real-world environmental challenges, developing tech solutions that could make a genuine difference. With prizes totaling $50,000 and mentorship from industry leaders, this is an opportunity you don't want to miss.</p>

      <p class="text-lg leading-relaxed mb-6">Registration is now open! Whether you're a seasoned developer or just starting out, we welcome participants of all skill levels. Join us in building technology that makes the world a better place.</p>
    `
  },
  {
    id: '5',
    title: 'Skills Workshop Series: Web Development Fundamentals',
    excerpt: 'A comprehensive guide to our new workshop series designed to help beginners master modern web development.',
    category: 'Education',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    author: 'Alex Kumar',
    authorRole: 'Lead Instructor',
    authorImage: '/api/placeholder/100/100',
    image: '/api/placeholder/1200/600',
    featured: false,
    content: `
      <p class="text-lg leading-relaxed mb-6">Our new Web Development Fundamentals workshop series is designed to take complete beginners to job-ready developers in just 12 weeks.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">Curriculum Overview</h2>
      <p class="text-lg leading-relaxed mb-6">We cover everything from HTML and CSS basics to advanced JavaScript frameworks like React and Next.js. Each session includes hands-on projects that build real-world skills.</p>

      <p class="text-lg leading-relaxed mb-6">Our instructors are industry professionals who bring years of experience to the classroom. Small class sizes ensure everyone gets personalized attention and support throughout their learning journey.</p>
    `
  },
  {
    id: '6',
    title: 'Community Impact Report: Q3 2025',
    excerpt: 'Celebrating our achievements and the positive impact we\'ve made together in the past quarter.',
    category: 'Community',
    date: 'Oct 15, 2025',
    readTime: '8 min read',
    author: 'Jennifer Martinez',
    authorRole: 'Community Director',
    authorImage: '/api/placeholder/100/100',
    image: '/api/placeholder/1200/600',
    featured: false,
    content: `
      <p class="text-lg leading-relaxed mb-6">What an incredible quarter it's been! Our community has grown, launched new initiatives, and made a real difference in our neighborhood and beyond.</p>

      <h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">By The Numbers</h2>
      <p class="text-lg leading-relaxed mb-6">This quarter, we hosted 24 events, welcomed 150 new members, and completed 8 community projects. Our volunteer hours totaled over 2,000, demonstrating the incredible dedication of our members.</p>

      <p class="text-lg leading-relaxed mb-6">But numbers only tell part of the story. The real impact comes from the connections made, skills learned, and lives changed through our programs. Thank you to everyone who makes this community so special.</p>
    `
  }
];

// Helper function to get a post by ID
export const getPostById = (id: string): BlogPost | undefined => {
  return MOCK_POSTS.find(post => post.id === id);
};

// Helper function to get suggested posts (excluding current post)
export const getSuggestedPosts = (currentId: string, limit: number = 3): BlogPost[] => {
  return MOCK_POSTS
    .filter(post => post.id !== currentId)
    .slice(0, limit);
};