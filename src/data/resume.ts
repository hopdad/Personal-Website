export interface Job {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  school: string;
  location?: string;
  startDate: string;
  endDate: string;
  honors?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Resume {
  headline: string;
  summary?: string;
  experience: Job[];
  education: Education[];
  skills: SkillGroup[];
}

const resume: Resume = {
  headline: 'Software Developer',
  summary:
    'Practical software developer with experience building web applications, CLIs, and developer tools. Focused on clean architecture, accessibility, and shipping work that lasts.',

  experience: [
    {
      title: 'Software Developer',
      company: 'Some Outdoors Co.',
      location: 'Remote',
      startDate: 'Mar 2023',
      highlights: [
        'Built and maintained customer-facing web applications using Astro, React, and TypeScript',
        'Designed a trip-planning PWA with offline-first architecture and map tile caching',
        'Improved Lighthouse scores from ~70 to 95+ across the marketing site',
        'Collaborated with design to implement a component library aligned with brand guidelines',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Basecamp Digital',
      location: 'Portland, OR',
      startDate: 'Jun 2021',
      endDate: 'Feb 2023',
      highlights: [
        'Developed REST APIs and internal tools using Node.js and PostgreSQL',
        'Wrote and maintained a Go CLI for automating deployment workflows',
        'Reduced CI build times by 40% through caching and parallelization',
        'Participated in code reviews and mentored an intern through their first project',
      ],
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      startDate: 'Jan 2020',
      endDate: 'May 2021',
      highlights: [
        'Built marketing sites and e-commerce storefronts for small businesses',
        'Delivered accessible, mobile-first designs on tight timelines',
        'Managed client relationships, scoping, and project delivery end-to-end',
      ],
    },
  ],

  education: [
    {
      degree: 'B.S. Computer Science',
      school: 'University of Oregon',
      location: 'Eugene, OR',
      startDate: '2016',
      endDate: '2020',
      honors: "Dean's List, 3.7 GPA",
    },
  ],

  skills: [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Go', 'HTML', 'CSS', 'SQL'] },
    { category: 'Frameworks', items: ['Astro', 'React', 'Node.js', 'Tailwind CSS', 'Express'] },
    { category: 'Tools', items: ['Git', 'GitHub Actions', 'PostgreSQL', 'Docker', 'Figma'] },
    { category: 'Practices', items: ['Accessibility (WCAG)', 'Responsive design', 'CI/CD', 'Code review'] },
  ],
};

export default resume;
