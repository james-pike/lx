import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { inject } from "@vercel/analytics";
import Footer from "~/components/widgets/Footer";


//



export default component$(() => {
   useVisibleTask$(() => {
    inject(); // Runs only on client sides
  });
  return (
    <>
      <main class="mt-0 px-0 md:px-0">
        <Slot />
      </main>
     <Footer/>
      
    </>
  );
});
