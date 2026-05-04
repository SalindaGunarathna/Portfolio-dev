import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Salinda",
  lastName: "Gunarathna",
  name: `Salinda Gunarathna`,
  role: "Computer Engineer",
  avatar: "/images/avatar1.jpg",
  email: "salindagunarathne@gmail.com",
  cv: "https://drive.google.com/file/d/1YdLhwWqV7n7R2wOuc2yHPRgxQppCBscY/view?usp=sharing",
  location: "Asia/Colombo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Sinhala"], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: <>My weekly newsletter about creativity and engineering</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SalindaGunarathna",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/salinda-gunarathna/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning complex ideas into practical systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Salinda</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/projects/SHEAF_Secure,_Post-Quantum_Federated_Learning",
  },
  subline: (
    <>
      I'm Salinda, a Computer Engineer specialising in full-stack
      development, cloud technologies, and DevOps practices. I build
      secure, scalable systems backed by strong cryptography knowledge,
      and integrate AI to deliver real-world solutions.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Engineer with hands-on experience in full-stack development,
        cloud technologies, and DevOps practices. I design and build reliable,
        scalable applications — from frontend interfaces to backend services and
        cloud-native infrastructure.
        <br /><br />
        With a strong foundation in cryptography and secure system design, I apply
        security-first thinking throughout the development lifecycle. I am also
        actively integrating AI and machine learning techniques into practical
        solutions that address real-world problems.
        <br /><br />
        I am currently open to new opportunities where I can contribute to
        innovative projects, grow as an engineer, and deliver meaningful impact
        in a forward-thinking team.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Zone4X IT Solutions (Pvt) Ltd",
        timeframe: "Mar 2026 - Present",
        role: "Software Engineer (Contract)",
        achievements: [
          <>
            Developing backend services using <strong>Spring Boot</strong> and frontend
            features with <strong>Angular</strong> for a civil engineering estimation platform.
          </>,
          <>
            Working with <strong>AWS</strong> services including ECS, EC2, S3, and Lambda
            for deployment and scalability.
          </>,
        ],
        images: [],
      },
      {
        company: "Syntax Genie",
        timeframe: "Jul 2024 - Jan 2025",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Lead Developer (Video Management Service): Deployed a secure,
            on-demand video processing pipeline using Python, Docker, FFmpeg, and OpenAI
            Whisper. Conducted background research to identify the optimal cloud deployment
            approach and successfully deployed the service on Azure Container Instances,
            integrating it seamlessly with the Spring Boot backend application.
          </>,
          <>
            Full-Stack Development & Collaboration:
            Contributed to the “Learnova” platform by building
            new features, fixing backend issues, and working within
            Agile workflows using Jira and Git/GitHub.
          </>,
          <>
            Custom Video Security: Implemented
            proprietary video encryption and built
            a custom LHLS.js player to securely decode and stream protected content.
          </>,
          <>
            Cloud Architecture & DevOps: Led backend
            migration from Azure Batch to Azure Container
            Instances and automated infrastructure using Terraform and Docker.
            Worked with AWS services such as S3, Lambda, MediaConvert,
            and Transcribe for video processing, cost optimization, and scalability.
          </>,
          <>
            AI-Driven Features: Developed full-stack AI capabilities
            including Auto-Grading and Chatbot systems,
            collaborating with ML engineers on model integration and API design.
          </>,
          <>
            Technical Documentation: Created comprehensive
            documentation with clear explanations, architecture
            diagrams, and process flows to support development and maintenance.
          </>,
          // <>
          //   DevOps (IaC & Containerization): Automated AWS infrastructure deployment
          //   (Lambda, S3) using Terraform and Dockerized the Python
          //   video processing scripts for deployment on Azure.
          // </>,
          // <>
          //   Core Full-Stack Development (Spring Boot & React): Contributed to the main "Learnova"
          //   platform by building new features and fixing complex backend bugs,
          //   including issues with Spring's transactional annotations.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/SyntaxGenie.png",
            alt: "image",
            width: 16,
            height: 10,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    academic: {
      institutions: [
        {
          name: "University of Ruhuna",
          degree: "B.Sc.Eng. in Computer Engineering",
          field: "Computer Engineering",
          description: <>Studied Computer Engineering at Faculty of Engineering</>,
        },
      ],
    },
    extra: {
      // Add online courses, workshops and certifications here
      courses: [
        {
          title: "Ultimate AWS Certified Solutions Architect Associate 2025",
          provider: "Udemy",
          year: "2025",
          credentialUrl: "https://www.udemy.com/certificate/UC-3fc000b2-890e-47e3-8a47-880acddab733"
        },
        {
          title: "Soft Skills Development",
          provider: "Career Guidance Unit-University of Ruhuna ",
          year: "2023",
        },
      ],
    },
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>Proficient in building RESTful APIs and integrating with databases.</>
        ),
        tags: [
          {
            name: "Spring Boot",
            icon: "springboot",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "kafka",
            icon: "kafka",
          },
        ],
      },
      {
        title: "DevOps and Infrastructure Management",
        description: (
          <>Experienced in managing cloud infrastructure and CI/CD pipelines.</>
        ),
        tags: [
          {
            name: "GitHub Actions",
            icon: "githubactions",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Terraform",
            icon: "terraform",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Ansible",
            icon: "ansible",
          },
          {
            name: "Hadoop",
            icon: "hadoop"
          }
        ],
      },
      {
        title: "Machine Learning",
        description: (
          <>
            Experience with federated learning, LLM integration, vector databases,
            and LangChain for building production LLM applications.
          </>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "Federated Learning",
            icon: "federated-learning",
          },
          {
            name: "LLM Integration",
            icon: "llm",
          },
          {
            name: "Vector DB",
            icon: "vectordb",
          },
          {
            name: "LangChain",
            icon: "langchain",
          },
        ],
      },
      {
        title: "Cryptography & Security",
        description: (
          <>
            Practical experience with cryptographic algorithms and secure system
            design: key exchange mechanisms, symmetric and asymmetric encryption,
            digital signatures, and secure transport protocols.
          </>
        ),
        tags: [
          { name: "RSA", icon: "rsa" },
          { name: "AES", icon: "aes" },
          { name: "ECC", icon: "ecc" },
          { name: "Diffie-Hellman", icon: "diffie-hellman" },
          { name: "Ascon Encryption", icon: "ascon" },
          { name: "Kyber Key Exchange", icon: "kyber" },
          { name: "Digital Signatures", icon: "digital-signature" },
          { name: "TLS/mTLS", icon: "tls" },
          { name: "Rudraksh Key Exchange", icon: "Rudraksh" },
        ],
      },
      {
        title: "AWS Cloud Services",
        description: (
          <>Experience in working with AWS services</>
        ),
        tags: [
          {
            name: "AWS EC2",
            icon: "aws-ec2",
          },
          {
            name: "AWS Lambda",
            icon: "aws-lambda",
          },
          {
            name: "Amazon S3",
            icon: "aws-s3",
          },
          {
            name: "Amazon RDS",
            icon: "aws-rds",
          },
          {
            name: "MediaConverter",
            icon: "aws-mediaconvert",
          },
          {
            name: "Amazon Transcribe",
            icon: "aws-transcribe",
          },
        ],
      },
      {
        title: "Azure Cloud Services",
        description: (
          <>Experience in working with Azure services</>
        ),
        tags: [

          {
            name: "Azure Blob Storage",
            icon: "azure-blob-storage",
          },
          {
            name: "Azure Batch Service",
            icon: "azure-batch",
          },
          {
            name: "Azure Container Instances",
            icon: "azure-container-instances",
          },
          {
            name: "Azure Functions",
            icon: "azure-functions",
          },
          {
            name: "Azure Container Registry",
            icon: "azure-container-registry",
          }
        ],
      },
      {
        title: "Database Management",
        description: (
          <>Proficient in building and optimizing databases.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
        ],
      },
      {
        title: "Frontend Development",
        description: (
          <>Proficient in building responsive and user-friendly interfaces.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
      },
    ],
  },

  activities: {
    display: true,
    title: "Activities & contributions",
    items: [
      {
        organization: "Rextro 2025",
        role: "Final-year mentor (Entertainment section)",
        description: <>
          Served as a final-year mentor for the Entertainment Division of Rextro 2025,
          providing leadership, coordination, and guidance in organizing entertainment-related
          activities and events.
        </>,
      },
      {
        organization: "Xbotix 2023 Exhibition",
        role: "Organization team",
        description: <>Part of the team responsible for organizing the Xbotix exhibition.</>,
      },
      {
        organization: "AXIOM",
        role: "Program team member",
        description: <>Contributed to program planning and coordination for Axion events.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/chip.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/syntaxgeni.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cicd.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/syntaxgeni2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    // {
    //   src: "/images/gallery/vertical-2.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-3.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, home, about, blog, work, gallery };
