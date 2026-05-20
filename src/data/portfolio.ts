export type ContactLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  title: string;
  company: string;
  stack: string[];
  impact: string;
  links: ContactLink[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: 'Juan Diego Mejia Vargas',
  title: 'Software Engineer',
  location: 'Medellin, Colombia',
  phone: '+57 316 065 2200',
  email: 'juandieg0mv22@gmail.com',
  summary:
    'Software Engineer with over 5 years of experience specializing in .NET, React, and the Azure ecosystem. Active contributor to architectural design discussions for robust and scalable microservices and event-driven systems. Proven record modernizing legacy applications by moving them to the cloud, reducing infrastructure costs, and improving scalability and performance.',
  cvPath: '/assets/Juan_Diego_Mejia_Vargas_CV.pdf',
};

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-diego-mej%C3%ADa-vargas-66a767209/', external: true },
  { label: 'GitHub', href: 'https://github.com/jdmejiav', external: true },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  { value: '5+', label: 'Years building production software' },
  { value: '30%', label: 'Planning-time reduction on Azure deployment' },
  { value: '40%', label: 'Production-time reduction through automation' },
  { value: 'AZ-900', label: 'Azure Fundamentals certified in 2025' },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer II',
    company: 'Globant',
    companyUrl: 'https://www.globant.com/',
    location: 'Medellin',
    dates: 'May 2025 - Present',
    bullets: [
      'Refactored a heavily concurrent processing application to generate reports and deliver them using Service Bus and SendGrid, removing an on-premises SMTP server while reducing email-loss risk and costs.',
      'Implemented key components of a debt collection queue system with .NET and React, enabling efficient task distribution to agents for borrower-payment recovery.',
      'Actively participates in technical discussions to design and refine tickets with clear and feasible requirements.',
    ],
  },
  {
    role: 'Software Engineer II',
    company: 'WIGA',
    companyUrl: 'https://solucioneswiga.com/',
    location: 'Medellin',
    dates: 'July 2023 - May 2025',
    bullets: [
      'Contributed to a warehouse management system using .NET, Angular, Android Studio, and MSSQL Server, integrating RFID technology to track inventory products.',
      'Contributed to a robust microservices architecture and event-driven serverless approach with Azure Functions and Event Hub for a WMS system.',
      'Implemented real-time message streaming for RFID tag reading using Azure Event Hub and managed concurrency efficiently with Event Grid, ensuring low-latency processing and high scalability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Bouquet Collection',
    companyUrl: 'http://www.bouquetcollection.com/',
    location: 'Miami',
    dates: 'July 2022 - July 2023',
    bullets: [
      'Developed a communication system for production planning using React, .NET, Docker, and MSSQL Server, implementing WebSockets with SignalR.',
      'Implemented a microservices architecture deployed on Azure, achieving a 30% reduction in planning times and a 40% reduction in production times.',
      'Implemented Azure pipelines for unit testing, automated builds, and Docker image publishing to ACR.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Twelve',
    companyUrl: 'https://twelve.net.co/',
    location: 'Medellin',
    dates: 'March 2022 - July 2022',
    bullets: [
      'Participated in creating an ERP for external companies using React, .NET, MongoDB, and Docker, implementing headless architectures deployed on Azure.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Pagame',
    companyUrl: 'https://pagame.com.co/inicio',
    location: 'Medellin',
    dates: 'May 2021 - June 2022',
    bullets: ['Contributed to migrating a monolithic Spring Boot architecture application to a microservices architecture.'],
  },
];

export const projects: Project[] = [
  {
    title: 'Concurrent Reporting and Delivery Modernization',
    company: 'Globant',
    stack: ['.NET', 'React', 'Service Bus', 'SendGrid'],
    impact: 'Removed an on-premises SMTP dependency while reducing email-loss risk and operating costs.',
    links: [{ label: 'Company', href: 'https://www.globant.com/', external: true }],
  },
  {
    title: 'RFID Warehouse Management Platform',
    company: 'WIGA',
    stack: ['.NET', 'Angular', 'Android Studio', 'MSSQL Server', 'Azure Functions', 'Event Hub', 'Event Grid'],
    impact: 'Enabled RFID-based inventory tracking with low-latency, scalable event processing.',
    links: [{ label: 'Company', href: 'https://solucioneswiga.com/', external: true }],
  },
  {
    title: 'Production Planning Communication System',
    company: 'Bouquet Collection',
    stack: ['React', '.NET', 'Docker', 'MSSQL Server', 'SignalR', 'Azure', 'Azure Pipelines'],
    impact: 'Reduced planning times by 30% and production times by 40% through Azure-hosted microservices.',
    links: [{ label: 'Company', href: 'http://www.bouquetcollection.com/', external: true }],
  },
  {
    title: 'Headless ERP Platform',
    company: 'Twelve',
    stack: ['React', '.NET', 'MongoDB', 'Docker', 'Azure'],
    impact: 'Helped create an ERP for external companies with a headless architecture deployed on Azure.',
    links: [{ label: 'Company', href: 'https://twelve.net.co/', external: true }],
  },
  {
    title: 'Monolith-to-Microservices Migration',
    company: 'Pagame',
    stack: ['Spring Boot', 'Microservices'],
    impact: 'Contributed to migrating a monolithic Spring Boot application into a microservices architecture.',
    links: [{ label: 'Company', href: 'https://pagame.com.co/inicio', external: true }],
  },
];

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['C#', 'JavaScript', 'TypeScript', 'Kotlin', 'Java'] },
  { label: 'Frameworks', items: ['.NET', 'React', 'Angular', 'Android Studio'] },
  { label: 'Databases', items: ['PL/SQL', 'MSSQL Server', 'MYSQL', 'MongoDB', 'CosmosDB'] },
  { label: 'Cloud', items: ['Azure', 'GCP'] },
  { label: 'Architecture', items: ['Microservices', 'Event-driven systems', 'Headless architecture'] },
  { label: 'Delivery', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Azure Pipelines'] },
];

export const education = [
  {
    title: "Bachelor's degree in Systems Engineering",
    institution: 'EAFIT',
    details: 'Medellin, 2023',
  },
];

export const certifications = [
  {
    title: 'AZ-900 - Azure Fundamentals',
    issuer: 'Microsoft Azure',
    details: '2025',
  },
];
