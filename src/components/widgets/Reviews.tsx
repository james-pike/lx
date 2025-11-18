import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';


export default component$(() => {
  useStyles$(styles);

  const images = Array.from({ length: 7 }, (_, i) => `c${i + 1}.png`);
  const isPlaying = useSignal<boolean>(false);
  // Initialize based on screen size to prevent flash - use 4 for desktop (768px+), 2 for mobile
  const slidesPerViewSig = useSignal(5);

  // Update slidesPerView based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateSlidesPerView = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        slidesPerViewSig.value = 5; // Desktop - 4 slides
      } else {
        slidesPerViewSig.value = 2; // Mobile - 2 slides
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    cleanup(() => {
      window.removeEventListener('resize', updateSlidesPerView);
    });
  });

  return (
    <>
      <Card.Root class="p-3 md:p-10 bg-[#29b9b0] ">
        {/* <Heading /> */}
      <Carousel.Root
  class="carousel-root"
  slidesPerView={slidesPerViewSig.value}
  gap={35}
  autoPlayIntervalMs={2500}
  bind:autoplay={isPlaying}
  draggable={true}
  align="start"
>
          <Carousel.Scroller class="carousel-scroller">
            {images.map((image) => (
              <Carousel.Slide key={image} class="">
                <Card.Root class="md:h-48 overflow-hidden">
                  <img src={`/images/${image}`} class="w-full md:h-48 object-cover" alt={`Slide ${image}`} />
                </Card.Root>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      </Card.Root>
      <div class="h-6 bg-[#70C7BA]"></div>
      </>
  );
});