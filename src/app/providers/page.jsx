import ProviderCard from '@/component/ProviderCard';
import Title from '@/component/Title';
import React from 'react';

const Providers = () => {

    const providersInfo = [
  {
    "id": 1,
    "name": "TechNova Solutions",
    "slug": "technova-solutions",
    "category": "Web Development",
    "services": ["Web Development", "Frontend Development", "Backend Development"],
    "location": "Sylhet, Bangladesh",
    "experience": "5+ Years",
    "rating": 4.9,
    "reviews": 126,
    "startingPrice": 15000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Professional web development services for businesses, startups, and organizations.",
    "image": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "id": 2,
    "name": "CodeCraft BD",
    "slug": "codecraft-bd",
    "category": "Software Development",
    "services": ["Custom Software", "Web Applications", "API Development"],
    "location": "Dhaka, Bangladesh",
    "experience": "7+ Years",
    "rating": 4.8,
    "reviews": 98,
    "startingPrice": 25000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Custom software development solutions designed to solve complex business problems.",
    "image": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "id": 3,
    "name": "PixelWave Studio",
    "slug": "pixelwave-studio",
    "category": "UI/UX Design",
    "services": ["UI/UX Design", "Web Design", "Figma Design", "Prototyping"],
    "location": "Sylhet, Bangladesh",
    "experience": "4+ Years",
    "rating": 4.9,
    "reviews": 84,
    "startingPrice": 8000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Creative UI/UX design services focused on modern, intuitive, and user-friendly digital experiences.",
    "image": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "id": 4,
    "name": "DevNest Technologies",
    "slug": "devnest-technologies",
    "category": "Full-Stack Development",
    "services": ["MERN Stack", "Next.js", "Node.js", "Database Development"],
    "location": "Dhaka, Bangladesh",
    "experience": "6+ Years",
    "rating": 4.7,
    "reviews": 112,
    "startingPrice": 20000,
    "currency": "BDT",
    "verified": true,
    "availability": "Busy",
    "description": "Full-stack development services using modern technologies for scalable web applications.",
    "image": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "id": 5,
    "name": "CloudBridge IT",
    "slug": "cloudbridge-it",
    "category": "Cloud & DevOps",
    "services": ["AWS", "Cloud Deployment", "DevOps", "Server Management"],
    "location": "Chattogram, Bangladesh",
    "experience": "8+ Years",
    "rating": 4.8,
    "reviews": 76,
    "startingPrice": 18000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Reliable cloud infrastructure, deployment, and DevOps services for growing businesses.",
    "image": "/images/providers/cloudbridge.jpg"
  },
  {
    "id": 6,
    "name": "DigitalEdge BD",
    "slug": "digitaledge-bd",
    "category": "Digital Marketing",
    "services": ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing"],
    "location": "Sylhet, Bangladesh",
    "experience": "5+ Years",
    "rating": 4.7,
    "reviews": 143,
    "startingPrice": 10000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Result-driven digital marketing services to help businesses increase their online presence.",
    "image": "/images/providers/digitaledge.jpg"
  },
  {
    "id": 7,
    "name": "SecureNet Solutions",
    "slug": "securenet-solutions",
    "category": "Cybersecurity",
    "services": ["Security Audit", "Penetration Testing", "Network Security", "Security Consulting"],
    "location": "Dhaka, Bangladesh",
    "experience": "9+ Years",
    "rating": 4.9,
    "reviews": 67,
    "startingPrice": 30000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Professional cybersecurity services to protect applications, networks, and business data.",
    "image": "/images/providers/securenet.jpg"
  },
  {
    "id": 8,
    "name": "AppForge Technologies",
    "slug": "appforge-technologies",
    "category": "Mobile App Development",
    "services": ["Android Apps", "iOS Apps", "Flutter", "React Native"],
    "location": "Dhaka, Bangladesh",
    "experience": "6+ Years",
    "rating": 4.8,
    "reviews": 91,
    "startingPrice": 25000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Mobile application development services for Android and iOS platforms.",
    "image": "/images/providers/appforge.jpg"
  },
  {
    "id": 9,
    "name": "DataSphere IT",
    "slug": "datasphere-it",
    "category": "AI & Data Solutions",
    "services": ["Machine Learning", "Data Analytics", "AI Solutions", "Data Visualization"],
    "location": "Sylhet, Bangladesh",
    "experience": "5+ Years",
    "rating": 4.6,
    "reviews": 54,
    "startingPrice": 30000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "AI and data solutions that help organizations turn data into useful business insights.",
    "image": "/images/providers/datasphere.jpg"
  },
  {
    "id": 10,
    "name": "CreativeCode Studio",
    "slug": "creativecode-studio",
    "category": "Web & Branding",
    "services": ["Website Development", "Branding", "Logo Design", "Graphic Design"],
    "location": "Rajshahi, Bangladesh",
    "experience": "4+ Years",
    "rating": 4.8,
    "reviews": 105,
    "startingPrice": 12000,
    "currency": "BDT",
    "verified": true,
    "availability": "Available",
    "description": "Creative web development and branding services for startups and small businesses.",
    "image": "/images/providers/creativecode.jpg"
  }
]

    return (
        <div>
           <Title>Explore Reliable Service Providers</Title> 

           <div>
            {providersInfo.map((info) => (
                <ProviderCard key={info.id} info={info}></ProviderCard>
            ))}
           </div>
        </div>
    );
};

export default Providers;