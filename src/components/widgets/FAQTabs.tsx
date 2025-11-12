import { component$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import FAQAccordion from './FAQAccordion';
import Heading2 from './Heading2';

export default component$(() => {
  // FAQ data for the category
  const faqs = [
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

  return (
    <>
      <div class="max-w-5xl mx-auto">
        <Card.Root class="p-3 md:p-5">
          <Heading2 />
          <Card.Content class="space-y-2 p-0">
            <FAQAccordion faqs={faqs} />
          </Card.Content>
        </Card.Root>
      </div>
    </>
  );
});