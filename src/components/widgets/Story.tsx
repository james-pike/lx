import { component$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import Heading from './Heading';

export default component$(() => {
  return (
    <div class="bg-[#49EACB]">
      <div class="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Card.Root class="p-6 md:p-12 bg-[#B6B6B6]/40 border-2">
          <Heading
            title="Story"
            icon={
              <svg class="-mt-4" height="32px" width="32px" fill="#70C7BA" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            }
          />

          <div class="space-y-6 md:space-y-8 text-gray-800 dark:text-gray-200">
            <p class="text-lg md:text-2xl leading-relaxed">
              Lux Lions were born in the Crypto Kingdom, where power is earned through precision, discipline, and unwavering focus. Forged on Kaspa, they embody resilience and refinement, rising as symbols of leadership in a digital realm shaped by constant evolution.
            </p>

            <p class="text-lg md:text-2xl leading-relaxed">
              Guided by the light of Lux, each Lion represents mastery expressed through gold, rose gold, and VVS diamond lineage. These elements reflect clarity, rarity, and purpose, forming a foundation that strengthens the pride and elevates the standards of the entire Kingdom.
            </p>

            <p class="text-lg md:text-2xl leading-relaxed">
              To hold a Lux Lion is to embrace intention and legacy. The collection stands as a declaration of ambition, built for those who pursue excellence without compromise. As the Kingdom expands, these Lions remain the enduring core of its identity.
            </p>
          </div>
        </Card.Root>
      </div>
    </div>
  );
});