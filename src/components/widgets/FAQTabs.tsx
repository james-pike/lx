import { component$ } from '@builder.io/qwik';
import { Tabs } from '../ui/Tabs';
import { Card } from '../ui/Card';
import FAQAccordion from './FAQAccordion';
import Heading2 from './Heading2';

// Create Qwik-compatible icon componentss
// const PaintbrushIcon = component$(() => {
//   return <LuPaintbrush class="w-5 h-5 mb-1" />;
// });

// const CodeIcon = component$(() => {
//   return <LuCode class="w-5 h-5 mb-1" />;
// });

// const BookIcon = component$(() => {
//   return <LuBook class="w-5 h-5 mb-1" />;
// });

// const MarketingIcon = component$(() => {
//   return <LuMegaphone class="w-5 h-5 mb-1" />;
// });

export default component$(() => {
  // FAQ data for each category
  const designFAQs = [
    {
      question: "What design services do you offer?",
      answer: "We offer comprehensive design services including UI/UX design, web design, mobile app design, branding, and graphic design. Our team focuses on creating user-centered designs that are both beautiful and functional."
    },
    {
      question: "How long does a design project take?",
      answer: "Design timelines vary based on project complexity. A simple website design typically takes 2-4 weeks, while comprehensive branding or complex web applications can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide design revisions?",
      answer: "Yes, we include multiple rounds of revisions in our design process. Typically, we offer 2-3 major revision rounds and unlimited minor tweaks to ensure you're completely satisfied with the final design."
    },
    {
      question: "What design software do you use?",
      answer: "We use industry-standard tools including Figma, Adobe Creative Suite (Photoshop, Illustrator, XD), Sketch, and Framer. We choose tools based on project requirements and client preferences."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your existing brand guidelines or help you evolve and modernize them. If you don't have brand guidelines, we can create comprehensive ones as part of our branding service."
    },
    {
      question: "Do you design for mobile and tablet devices?",
      answer: "Yes, all our designs are responsive and optimized for mobile, tablet, and desktop devices. We follow a mobile-first approach to ensure your design looks great on all screen sizes."
    },
    {
      question: "What's included in your design deliverables?",
      answer: "Our design deliverables typically include high-fidelity mockups, design system/style guide, exported assets, prototypes, and source files. We provide everything needed for development or future design updates."
    },
    {
      question: "Do you offer design consulting services?",
      answer: "Yes, we offer design consulting and strategy sessions. This includes design audits, UX research, user testing, design system creation, and strategic design planning for your business goals."
    }
  ];

  const developmentFAQs = [
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern web technologies including React, Next.js, Vue.js, Node.js, Python, PHP, and various databases. We also work with mobile technologies like React Native and Flutter."
    },
    {
      question: "Do you build custom web applications?",
      answer: "Yes, we build custom web applications tailored to your specific business needs. From simple websites to complex enterprise applications, we handle projects of all sizes and complexity levels."
    },
    {
      question: "How do you ensure code quality?",
      answer: "We follow best practices including code reviews, automated testing, continuous integration, and adherence to coding standards. We also use version control and maintain comprehensive documentation."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, bug fixes, performance optimization, and feature enhancements. We provide different support levels based on your needs."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We have extensive experience integrating with third-party APIs, CRM systems, payment processors, databases, and other business tools to create seamless workflows."
    },
    {
      question: "What's your development process?",
      answer: "We follow an agile development methodology with regular sprints, client reviews, and iterative improvements. You'll have visibility into progress with regular updates and staging environments for testing."
    },
    {
      question: "Do you handle database design and optimization?",
      answer: "Yes, we design efficient database schemas, optimize queries, and ensure proper data security. We work with SQL and NoSQL databases depending on your project requirements."
    },
    {
      question: "Can you help with cloud deployment and hosting?",
      answer: "Definitely! We help with cloud deployment on platforms like AWS, Google Cloud, and Azure. We also assist with domain setup, SSL certificates, and performance optimization."
    }
  ];

  const brandingFAQs = [
    {
      question: "What's included in a complete branding package?",
      answer: "A complete branding package includes logo design, color palette, typography selection, brand voice and messaging, business card design, letterhead, brand guidelines document, and various logo variations for different uses."
    },
    {
      question: "How long does the branding process take?",
      answer: "The branding process typically takes 4-8 weeks depending on the scope. This includes research, concept development, design iterations, and final deliverable preparation. Rush projects can be accommodated with adjusted timelines."
    },
    {
      question: "Do you research our industry and competitors?",
      answer: "Yes, we conduct thorough industry and competitor research to ensure your brand stands out in the market. This research informs our design decisions and helps create a unique brand position."
    },
    {
      question: "Can you rebrand an existing business?",
      answer: "Absolutely! We specialize in rebranding projects, whether you need a complete overhaul or just a refresh. We'll help you transition smoothly while maintaining brand recognition where valuable."
    },
    {
      question: "Do you provide trademark guidance?",
      answer: "While we're not lawyers, we provide guidance on trademark considerations and can recommend legal professionals for trademark searches and registration. We design with trademark potential in mind."
    },
    {
      question: "What if we don't like the initial concepts?",
      answer: "We start with multiple initial concepts and work closely with you to refine the direction. If you're not satisfied with the initial concepts, we'll explore new directions until we find the right fit."
    },
    {
      question: "Do you create brand guidelines documents?",
      answer: "Yes, we create comprehensive brand guidelines that include logo usage, color specifications, typography, voice and tone, imagery style, and application examples to ensure consistent brand implementation."
    },
    {
      question: "Can you design branded merchandise and materials?",
      answer: "Yes, we design a wide range of branded materials including business cards, brochures, packaging, merchandise, signage, and digital assets. We ensure consistency across all brand touchpoints."
    }
  ];

  const marketingFAQs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer comprehensive digital marketing including SEO, social media marketing, content marketing, email marketing, PPC advertising, conversion optimization, and marketing automation setup."
    },
    {
      question: "How do you measure marketing success?",
      answer: "We track key performance indicators (KPIs) relevant to your goals, such as website traffic, conversion rates, lead generation, social engagement, and ROI. We provide regular reports and analytics insights."
    },
    {
      question: "Do you create content for social media and blogs?",
      answer: "Yes, we create engaging content including blog posts, social media content, graphics, videos, and email campaigns. Our content is optimized for your target audience and aligned with your brand voice."
    },
    {
      question: "Can you help improve our website's search ranking?",
      answer: "Absolutely! Our SEO services include keyword research, on-page optimization, technical SEO, content optimization, and link building strategies to improve your search engine rankings and organic traffic."
    },
    {
      question: "Do you manage paid advertising campaigns?",
      answer: "Yes, we create and manage paid advertising campaigns on Google Ads, Facebook, Instagram, LinkedIn, and other platforms. We optimize campaigns for maximum ROI and provide detailed performance reports."
    },
    {
      question: "How do you develop marketing strategies?",
      answer: "We start with understanding your business goals, target audience, and competitive landscape. Then we develop data-driven strategies tailored to your industry, budget, and objectives with clear timelines and expectations."
    },
    {
      question: "Can you help with email marketing automation?",
      answer: "Yes, we design and implement email marketing campaigns and automation sequences including welcome series, nurture campaigns, abandoned cart emails, and customer retention campaigns."
    },
    {
      question: "Do you provide marketing analytics and reporting?",
      answer: "We provide comprehensive analytics and reporting including website analytics, campaign performance, social media insights, and ROI analysis. Reports are delivered monthly with strategic recommendations."
    }
  ];

  return (
    <>
      <style>{`
        .tab-images {
          position: relative;
          height: 160px;
          overflow: hidden;
          border-radius: 0.5rem 0.5rem 0 0;
        }
        .tab-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        [data-state="active"] ~ .tab-content .tab-image:nth-child(1),
        .tab-image.active:nth-child(1) { opacity: 1; }
        [data-state="active"] ~ .tab-content .tab-image:nth-child(2) { opacity: 0; }
        
        /* Show first image by default */
        .tab-image:first-child { opacity: 1; }
        
        /* Custom CSS to show images based on active tab */
        [data-value="0"][data-state="active"] ~ .tab-content .tab-image:nth-child(1) { opacity: 1; }
        [data-value="0"][data-state="active"] ~ .tab-content .tab-image:nth-child(2) { opacity: 0; }
        
        [data-value="1"][data-state="active"] ~ .tab-content .tab-image:nth-child(1) { opacity: 0; }
        [data-value="1"][data-state="active"] ~ .tab-content .tab-image:nth-child(2) { opacity: 1; }
      `}</style>
      
      <div class="tab-images">
        {/* <img src='/images/Web-Design.webp' class="tab-image" alt="Web Design" /> */}
    </div>
    <div class="max-w-5xl mx-auto">
    <Card.Root class="p-3 md:p-5">
      <Heading2/>  
     
      <Tabs.Root class="-mt-3.5">
        <Tabs.List class="grid w-full grid-cols-4 text-xs">
          <Tabs.Tab data-value="0">
            <div class="flex flex-col items-center">
              Design
            </div>
          </Tabs.Tab>
          <Tabs.Tab data-value="1">
            <div class="flex flex-col items-center">
              Develop
            </div>
          </Tabs.Tab>
          <Tabs.Tab data-value="2">
            <div class="flex flex-col items-center">
              Branding
            </div>
          </Tabs.Tab>
          <Tabs.Tab data-value="3">
            <div class="flex flex-col items-center">
              Marketing
            </div>
          </Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panel class="">
          <Card.Root class="rounded-t-none border-none">
            <Card.Content class="space-y-2 p-0">
              <FAQAccordion faqs={designFAQs} />
            </Card.Content>
          </Card.Root>
        </Tabs.Panel>
        
        <Tabs.Panel class="">
          <Card.Root class="rounded-t-none border-none">
            <Card.Content class="space-y-2 p-0">
              <FAQAccordion faqs={developmentFAQs} />
            </Card.Content>
          </Card.Root>
        </Tabs.Panel>
        
        <Tabs.Panel>
          <Card.Root class="border-none rounded-t-none">
            <Card.Content class="space-y-2 p-0">
              <FAQAccordion faqs={brandingFAQs} />
            </Card.Content>
          </Card.Root>
        </Tabs.Panel>
        
        <Tabs.Panel>
          <Card.Root class="rounded-t-none border-none">
            <Card.Content class="space-y-2 p-0">
              <FAQAccordion faqs={marketingFAQs} />
            </Card.Content>
          </Card.Root>
        </Tabs.Panel>
      </Tabs.Root>
       </Card.Root>
      </div>
    </>
  );
});