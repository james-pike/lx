import { component$ } from '@builder.io/qwik';
import { Separator } from '../ui/Separator';

export default component$(() => {
  return (
    <div>
      <div class="flex items-center gap-2 px-0 justify-between space-y-1">



        <div>
          <div class="flex items-center">
            <h4 class="text-3xl md:text-4xl pl-1 font-medium leading-none">Roadmap</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          {/* <p class="text-sm md:text-lg text-muted-foreground">Our process from start to finish.</p> */}
        </div>

        <div class="flex items-center mr-2 text-[#70C7BA]">
          {/* Example icon using an SVG; you can replace with your preferred icon */}
<svg fill="#70C7BA" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,57.741v374.695l150.388,21.822V79.564L0,57.741z M120.7,384.667l-91.011-16.844v-31l91.011,16.945V384.667z M120.7,332.26l-91.011-16.836V284.48L120.7,301.37V332.26z M120.7,279.918l-91.011-16.891v-30.954l91.011,16.899V279.918z M120.7,227.511l-91.011-16.883v-30.962l91.011,16.908V227.511z M120.7,175.105l-91.011-16.874v-30.97l91.011,16.916V175.105z"></path> </g> </g> <g> <g> <path d="M361.611,57.741v374.695l150.388,21.822V79.564L361.611,57.741z M482.311,384.667l-91.011-16.844v-31l91.011,16.945 V384.667z M482.311,332.26l-91.011-16.836V284.48l91.011,16.891V332.26z M482.311,279.918l-91.011-16.891v-30.954l91.011,16.899 V279.918z M482.311,227.511l-91.011-16.883v-30.962l91.011,16.908V227.511z M482.311,175.105l-91.011-16.874v-30.97l91.011,16.916 V175.105z"></path> </g> </g> <g> <g> <path d="M180.806,79.564v374.695l150.388-21.822V57.741L180.806,79.564z M301.506,367.822l-91.011,16.844V248.973l91.011-16.899 V367.822z M301.506,210.628l-91.011,16.883v-30.935l91.011-16.908V210.628z M301.506,158.23l-91.011,16.874v-30.928l91.011-16.916 V158.23z"></path> </g> </g> <g> <g> <polygon points="240.911,274.273 240.911,348.105 271.089,342.486 271.089,268.672 "></polygon> </g> </g> </g></svg>
        </div>


      </div>
      <Separator class="mt-1 mb-4" />
    </div>
  );
});