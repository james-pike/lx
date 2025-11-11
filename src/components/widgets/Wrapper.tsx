import { component$, Slot } from '@builder.io/qwik';

export const Wrapper = component$(() => {
  return (
    <div class="py-2 md:py-12 px-2">
      <Slot />
    </div>
  );
});