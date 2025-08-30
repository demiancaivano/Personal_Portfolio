export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Demian Nicolás Caivano",
    "jobTitle": "Full Stack Developer",
    "description": "Professional Full Stack Developer specialized in React, Flask, and PostgreSQL. Creating modern web applications with cutting-edge technologies.",
    "url": "https://personal-portfolio-topaz-eight.vercel.app",
    "image": "https://personal-portfolio-topaz-eight.vercel.app/profile-photo.jpg",
    "email": "demian.caivano@gmail.com",
    "sameAs": [
      "https://github.com/demiancaivano",
      "https://www.linkedin.com/in/demiancaivano/"
    ],
    "address": {
      "@type": "Place",
      "addressCountry": "Argentina"
    },
    "knowsAbout": [
      "React",
      "JavaScript",
      "TypeScript", 
      "Python",
      "Flask",
      "PostgreSQL",
      "Next.js",
      "TailwindCSS",
      "Full Stack Development",
      "Web Development",
      "E-commerce Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops complete web applications using modern frontend and backend technologies"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
