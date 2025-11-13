import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';


export default component$(() => {
  useStyles$(styles);

  const images = Array.from({ length: 7 }, (_, i) => `c${i + 1}.png`);
  const isPlaying = useSignal<boolean>(false);
  const slidesPerViewSig = useSignal(2); // Changed from 1.3 to 2

  // Update slidesPerView based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateSlidesPerView = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        slidesPerViewSig.value = 2; // Larger screens
      } else {
        slidesPerViewSig.value = 2; // Mobile - or change this to 1.3 if you want mobile different
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
      <Card.Root class="p-3 md:p-8 bg-[#29b9b0] max-w-6xl mx-auto">
        {/* <Heading /> */}
      <Carousel.Root
  class="carousel-root"
  slidesPerView={slidesPerViewSig.value}
  gap={12}
  autoPlayIntervalMs={2500}
  bind:autoplay={isPlaying}
  draggable={true}
  align="start"
>
          <Carousel.Scroller class="carousel-scroller">
            {images.map((image) => (
              <Carousel.Slide key={image} class="">
                <Card.Root>
                  <img src={`/images/${image}`} class="w-full object-cover" alt={`Slide ${image}`} />
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