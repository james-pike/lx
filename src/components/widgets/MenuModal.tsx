import { component$, useSignal, $, Signal, useVisibleTask$ } from "@builder.io/qwik";
import { LuX, LuChevronDown } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { useLocation } from "@builder.io/qwik-city";
import { Modal } from "../ui/Modal";
import IconHamburger from "../icons/IconHamburger";
import { buttonVariants } from "../ui/Button";

const CustomAccordion = component$(({ items, show }: { items: any[]; show: Signal<boolean> }) => {
  const openIndex = useSignal<number | null>(null);
  const location = useLocation();

  useVisibleTask$(({ track }) => {
    track(() => show.value);
    if (!show.value) {
      openIndex.value = null;
    }
  });

  const closeModal = $(() => (show.value = false));

  // Normalize paths to handle trailing slashes
  const normalizePath = (path: string) => path.replace(/\/$/, "");

  return (
    <div class="border-t border-primary-200">
      {items.map((item, index) => {
        // Check if the current route matches the item or any subitem
        const currentPath = normalizePath(location.url.pathname);
        const isActive =
          normalizePath(item.href) === currentPath ||
          (item.hasSubmenu &&
            item.subitems?.some((subitem: any) =>
              normalizePath(subitem.href.split("#")[0]) === currentPath
            ));
        return (
          <div
            key={index}
            class={cn(
              index > 0 && "border-t border-primary-200",
              index === items.length - 1 && "border-b-0"
            )}
          >
            {item.hasSubmenu ? (
              <>
                <button
                  class={cn(
                    "!text-2xl font-medium text-gray-700 dark:text-gray-200 flex items-center justify-between w-full p-2.5 px-5",
                    isActive &&
                    "bg-primary-100 dark:bg-primary-100/80 !important text-primary-800 dark:text-secondary-800 !important font-bold !important",
                    "hover:bg-primary-100 dark:hover:bg-primary-100/80 transition-all duration-200"
                  )}
                  onClick$={() => (openIndex.value = openIndex.value === index ? null : index)}
                >
                  <span>{item.title}</span>
                  <LuChevronDown
                    class={cn(
                      "h-6 w-6 text-gray-500 transition-transform duration-200",
                      openIndex.value === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  class={cn(
                    "text-2xl text-muted-foreground transition-all duration-500 ease-in-out max-h-0 overflow-hidden",
                    openIndex.value === index && "max-h-96"
                  )}
                >
                  <ul class="flex flex-col gap-0 pl-5">
                    {item.subitems!.map((subitem: any) => {
                      // Updated logic: Compare full href (including hash) with current pathname + hash
                      const isSubitemActive =
                        normalizePath(subitem.href) ===
                        normalizePath(location.url.pathname + (location.url.hash || ""));
                      return (
                        <li key={subitem.title} class="flex items-center">
                          <span class="text-primary-300 !text-2xs mr-3">✦</span>
                          <a
                            href={subitem.href}
                            class={cn(
                              "block text-gray-700 dark:text-gray-200 !text-2xl p-3 pl-1 font-medium transition-all duration-200",
                              isSubitemActive &&
                              "bg-primary-100 dark:bg-primary-100/80 !important text-primary-800 dark:text-secondary-800 !important font-bold !important",
                              "hover:bg-primary-100 dark:hover:bg-primary-100/80"
                            )}
                            onClick$={closeModal}
                          >
                            {subitem.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <a
                href={item.href}
                class={cn(
                  "block lg text-gray-700 !text-2xl !text-white dark:text-gray-200 p-3 px-5 font-medium transition-all duration-200",
                  isActive &&
                  "bg-primary-300/50 dark:bg-primary-100/80 !important text-primary-800 dark:text-secondary-800 !important font-bold !important",
                  "hover:bg-primary-100 dark:hover:bg-primary-100/80"
                )}
                onClick$={closeModal}
              >
                <span>{item.title}</span>
                {item.badge}
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
});



export default component$(() => {
  const show = useSignal(false);

  const menuItems = [
    { title: "About", href: "/", hasSubmenu: false },
    { title: "Roadmap", href: "/", badge: null },
    { title: "Rarity Guide", href: "/", badge: null },
    { title: "FAQ", href: "/", badge: null },
  ];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="absolute top-2.5 right-2.5  md:static">
          <Modal.Trigger
            class={cn(
              "p-1 py-0 border-3 backdrop-blur-sm transition-all duration-300",
              "bg-[#70C7BA]  mb-1 border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
            )}
          >
            <IconHamburger class="w-6 h-8 text-white  dark:text-secondary-200" />
          </Modal.Trigger>
        </div>

        <Modal.Panel
          position="left"
          class="dark:bg-gray-950 border-r bg-[#70C7BA]  border-primary-200 overflow-y-auto max-h-[100vh]"
        >
          <div class="border-primary-200 bg-white/30 dark:bg-gray-900 pt-0">
            <Modal.Title class="">
              <a href="/" class="focus:outline-none">
                <img
                  src="/images/banner.png"
                  alt="LUX LIONS"
                  class="w-auto h-14"
                />
              </a>
            </Modal.Title>
          </div>

          <nav class="mt-0 space-y-4 bg-white/30 dark:bg-gray-800">
            <CustomAccordion items={menuItems} show={show} />
          </nav>

          <div class="border-t border-primary-200 bg-white/30 dark:bg-gray-900 pb-5">
            <div class="sm:max-w-md px-5 pt-4 flex flex-row items-center gap-4 lg:justify-start lg:max-w-7xl">
              <div class="flex-shrink-0">
                <a
                  href="#"
                  class="w-full hover:bg-yellow-300 bg-[#e4b138] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold  shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
                  role="button"
                  aria-label="Mint NFT"
                >
                  <span class="relative z-10 flex items-center gap-1">
                    MINT
                    <img
                      src="/images/logo.png"
                      alt="Jar Icon"
  class="w-7 h-7  transform transition-transform duration-300 group-hover:scale-110 group-active:scale-100"
                    />
                  </span>
                  <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
                </a>
              </div>
              <div class="flex-shrink-0">
                <a
                  href="#"
                  class="w-full hover:bg-yellow-300 bg-[#b26122] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold text-white shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
                  role="button"
                  aria-label="Get $LION token"
                >
                  <span class="relative z-10 flex items-center gap-1">
                    Get $LION
                  </span>
                  <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
                </a>
              </div>
            </div>
          </div>

          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-8 top-2 text-primary-300 hover:text-primary-800 dark:text-black dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-5 w-5" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});