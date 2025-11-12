import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';
import Heading from './Heading';
import { Wrapper } from './Wrapper';

export default component$(() => {
  useStyles$(styles);

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
  const isPlaying = useSignal<boolean>(false);
  const slidesPerViewSig = useSignal(1.3); // Default to 1.3 for mobile

  // Update slidesPerView based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateSlidesPerView = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        slidesPerViewSig.value = 2; // Larger screens
      } else {
        slidesPerViewSig.value = 1; // Mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    cleanup(() => {
      window.removeEventListener('resize', updateSlidesPerView);
    });
  });

  return (
      <Wrapper>
            <Card.Root class="p-4 md:p-8 pt-5 max-w-6xl mx-auto">
 <Heading 
    />    <Carousel.Root
      class="carousel-root"
      slidesPerView={slidesPerViewSig.value}
      gap={30}
      autoPlayIntervalMs={5500}
      bind:autoplay={isPlaying}
    >
      <Carousel.Scroller class="carousel-scroller">
        {colors.map((color) => (
          <Carousel.Slide key={color} class=" ">
            <Card.Root>
          
            <img src={`/images/kaslands.jpeg`} class=" w-full object-cover"/>
            </Card.Root>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <div class="flex justify-center items-center gap-4">
        <Carousel.Pagination class="carousel-pagination">
          {colors.map((color, index) => (
            <Carousel.Bullet class="carousel-pagination-bullet" key={color}>
              {index + 1}
            </Carousel.Bullet>
          ))}
        </Carousel.Pagination>
      </div>
    </Carousel.Root>
    </Card.Root>
    </Wrapper>
  );
});