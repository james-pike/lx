import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const currentCharacter = useSignal(1);

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentCharacter.value = (currentCharacter.value % 10) + 1;
    }, 300); // Change character every 300ms for quick movement

    return () => clearInterval(interval);
  });

  return (
    <section class="bg-[#70C7BA]  flex flex-col">
      {/* Banner Section */}
   

      {/* Character Carousel */}
      <div class="flex-1 flex flex-col items-center  px-4 md:py-12">
        <div class="md:mb-12 relative w-full h-80 flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <img
              key={num}
              src={`/images/c${num}.png`}
              alt={`Character ${num}`}
              class={`absolute w-full h-full object-contain transition-opacity duration-150 ${
                currentCharacter.value === num ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
<p class="pt-4 px-2 text-lg text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus accusamus un autre fugiat molestias eos! </p>
        {/* Action Buttons */}
        <div class="flex gap-6 flex-wrap justify-center py-4 pb-8">
          <button class="px-8 py-4 bg-white text-primary-500 font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
            MINT
          </button>
          <button class="px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
            Get $LION
          </button>
        </div>
      </div>
    </section>
  );
});