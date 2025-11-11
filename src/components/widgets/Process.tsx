import { component$, useSignal, useComputed$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';
import { Wrapper } from './Wrapper';
import Heading from './Heading';

import styles from './carousel.css?inline';
import { Card } from '../ui/Card';

export default component$(() => {
  useStyles$(styles);
  
  // Add custom animation styles
  useStyles$(`
    .carousel-slide {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateY(0);
      opacity: 1;
    }
    
    .carousel-slide:not([data-active]) {
      transform: translateY(10px);
      opacity: 0.7;
    }
    
    .carousel-slide[data-active] {
      transform: translateY(0);
      opacity: 1;
    }
    
    .carousel-slide[data-active] .phase-content {
      animation: slideInFromRight 0.5s ease-out;
    }
    
    .carousel-slide[data-active] .milestone-item {
      animation: fadeInUp 0.4s ease-out both;
    }
    
    .carousel-slide[data-active] .milestone-item:nth-child(1) {
      animation-delay: 0.1s;
    }
    
    .carousel-slide[data-active] .milestone-item:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    .carousel-slide[data-active] .milestone-item:nth-child(3) {
      animation-delay: 0.3s;
    }
    
    .carousel-slide[data-active] .milestone-item:nth-child(4) {
      animation-delay: 0.4s;
    }
    
    .milestone-item {
      opacity: 0;
      transform: translateY(10px) translateX(10px);
    }
    
    .carousel-step span {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .carousel-step[data-active] span {
      transform: scale(1.02);
      animation: pulseOnce 0.3s ease-out;
    }
    
    .phase-content {
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(0);
      opacity: 1;
    }
    
    @keyframes slideInFromRight {
      from {
        transform: translateX(20px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px) translateX(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0) translateX(0);
      }
    }
    
    @keyframes pulseOnce {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1.02); }
    }
    
    /* Progress dot animations */
    .progress-separator {
      position: relative;
      overflow: hidden;
      background: #e5e7eb !important; /* gray-200 */
      transition: all 0.3s ease;
    }
    
    .progress-separator::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0%;
      background: hsl(var(--primary));
      transition: height 3s linear;
      border-radius: inherit;
      z-index: 1;
    }
    
    .progress-separator.active::after {
      height: 100%;
      animation: fillProgress 3s linear forwards;
    }
    
    .progress-separator.user-controlled {
      background: hsl(var(--primary)) !important;
    }
    
    .progress-separator.user-controlled::after {
      display: none;
    }
    
    .progress-separator.completed {
      background: hsl(var(--primary)) !important;
    }
    
    .progress-separator.completed::after {
      display: none;
    }
    
    @keyframes fillProgress {
      from {
        height: 0%;
      }
      to {
        height: 100%;
      }
    }
  `);

  const space = { marginBlock: '1rem' };

  // Signal to control autoplay state
  const isPlaying = useSignal<boolean>(false);
  const hasCompletedOneCycle = useSignal<boolean>(false);
  const currentStageStartTime = useSignal<number>(0);
  const userHasInteracted = useSignal<boolean>(false);

  // Start autoplay when component becomes visible
  useVisibleTask$(() => {
    isPlaying.value = true;
    currentStageStartTime.value = Date.now();
  });

  // Watch for stage changes to reset the animation timing
  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value);
    currentStageStartTime.value = Date.now();
    
    // If we've reached the end (last slide) and we're playing (not user-controlled)
    if (selectedIndex.value === roadmapPhases.length - 1 && isPlaying.value && !hasCompletedOneCycle.value && !userHasInteracted.value) {
      // Set a timeout to go to first slide one more time, then stop
      setTimeout(() => {
        selectedIndex.value = 0;
        hasCompletedOneCycle.value = true;
        isPlaying.value = false; // Stop autoplay
      }, 3000); // Wait for the interval time before cycling back
    }
  });

// 4 phases of a web design and development agency roadmap
const roadmapPhases = [
  {
    headline: 'Phase 1:',
    title: 'The Pride Awakens',
    icon: '🦁',
    description: 'Launch the Lux Lions collection on Kaspa and establish our foundation with exclusive minting opportunities.',
    milestones: [
      'Genesis mint of 1000 unique Lux Lions',
      'Launch $LION token on Kaspa',
      'Activate Discord community with holder roles',
      'List on major Kaspa NFT marketplaces',
    ],
  },
  {
    headline: 'Phase 2:',
    title: 'Building the Kingdom',
    icon: '👑',
    description: 'Expand utility and rewards for our pride members through exclusive benefits and Kaspa ecosystem partnerships.',
    milestones: [
      'Launch staking program with $LION rewards',
      'Introduce exclusive merch store for holders',
      'Collaborate with top Kaspa NFT projects',
      'Host virtual gallery events in the metaverse',
    ],
  },
  {
    headline: 'Phase 3:',
    title: 'The Luxury Safari',
    icon: '✨',
    description: 'Transform digital ownership into real-world experiences with luxury rewards and physical collectibles.',
    milestones: [
      'Launch physical collectible program',
      'Partner with luxury brands for holder perks',
      'Host exclusive IRL events in major cities',
      'Airdrop rare companion NFTs to loyal holders',
    ],
  },
  {
    headline: 'Phase 4:',
    title: 'Legacy & Beyond',
    icon: '🚀',
    description: 'Establish Lux Lions as a lasting brand with gaming integration, DAO governance, and continuous innovation.',
    milestones: [
      'Launch play-to-earn game featuring Lions',
      'Implement DAO for community governance',
      'Create scholarship fund for digital artists',
      'Expand into Gen 2 collection and ecosystem',
    ],
  },
];
  // Bind to carousel's selectedIndex for reactive updates
  const selectedIndex = useSignal(0);
  const previousIndex = useSignal(0);

  // Compute progress index to determine which separators are active
  const progressIndex = useComputed$(() => selectedIndex.value);

  // Track previous index for animations
  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value);
    previousIndex.value = selectedIndex.value;
  });

  // Compute background opacity based on selected index
  const bgOpacity = useComputed$(() => {
    return (selectedIndex.value + 1) * 10;
  });

  return (
    <>
      <Wrapper>
        <Card.Root class="p-4 md:p-8 pt-5 max-w-6xl border-2 bg-[#49EACB]/30 mx-auto">
        <Heading />
       <Carousel.Root 
  class="carousel-root" 
  gap={30} 
  bind:selectedIndex={selectedIndex}
  autoPlayIntervalMs={3000}
  bind:autoplay={isPlaying}
>
  <div class="flex flex-row gap-5 w-full">
    <div 
      class="w-1/3 rounded hidden md:block aspect-square" 
      style={`background-color: hsl(var(--primary) / ${bgOpacity.value}%)`}
    />
    <div class="flex flex-row items-start w-full md:flex-1">
      {/* Vertical progress line */}
      <div class="flex flex-col items-center justify-start w-2 mr-3">
        {roadmapPhases.map((_, index) => (
          <>
            <div
              class="w-1 h-0 bg-gray-200 rounded-full"
              style={{ marginTop: index === 0 ? '1rem' : '0.5rem' }}
              key={`spacer-${index}`}
            />
            {index < roadmapPhases.length && (
              <div
                class={`progress-separator w-1 h-4 rounded-full ${
                  userHasInteracted.value 
                    ? progressIndex.value >= index ? 'user-controlled' : ''
                    : progressIndex.value > index 
                      ? 'completed' 
                      : progressIndex.value === index && isPlaying.value
                        ? 'active'
                        : ''
                }`}
                style={{ transform: 'rotate(0deg)' }}
                key={`separator-${index}`}
              />
            )}
          </>
        ))}
      </div>

      {/* Stepper with alternating steps and slides */}
      <Carousel.Stepper class="carousel-stepper w-full" style={{ flexDirection: 'column' }}>
        {roadmapPhases.map((phase, index) => (
          <>
            <Carousel.Step
              class="flex items-start justify-start cursor-pointer"
              key={`step-${index}`}
              onClick$={() => {
                console.log(`Clicked index: ${index}`); // Debug click
                userHasInteracted.value = true; // Mark as user-controlled
                isPlaying.value = false; // Stop autoplay
                selectedIndex.value = index; // Manually update selected index
              }}
            >
              <span
                class={cn(
                  'text-sm md:text-base font-medium px-3 py-1.5 rounded',
                  selectedIndex.value === index ? 'bg-primary text-white' : 'bg-transparent'
                )}
              >
                <span class="rounded-l-base bg-white/40 py-1 pl-2 -ml-2 mr-1.5 "> {phase.headline} </span>
                {phase.title}
                <span class="ml-1">{phase.icon}</span>
              </span>
            </Carousel.Step>
            <Carousel.Slide
              style={space}
              class="carousel-slide p-3 text-sm md:p-4 !mt-2 bg-primary/10 rounded-lg shadow-sm"
              key={`slide-${index}`}
            >
              <div class="phase-content">
                <p class="mb-3">{phase.description}</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  {phase.milestones.map((milestone, i) => (
                    <li key={`milestone-${i}`} class="milestone-item text-sm leading-relaxed">
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            </Carousel.Slide>
          </>
        ))}
      </Carousel.Stepper>
    </div>
  </div>
</Carousel.Root>
        </Card.Root>
      </Wrapper>
    </>
  );
});