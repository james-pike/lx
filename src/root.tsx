import {
  component$,
  isDev,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "~/components/common/RouterHead";
import styles from "~/assets/styles/global.css?inline";
import Header from "./components/widgets/Header";

import {
  ThemeBaseColors,
  ThemeBorderRadiuses,
  ThemeFonts,
  ThemeModes,
  ThemePrimaryColors,
  ThemeStyles,
} from "@qwik-ui/utils";
import { APP_STATE_CONTEXT_ID } from "./_state/app-state-context-id";
import { AppState } from "./_state/app-state.type";
import { ThemeProvider } from "./lib/themes/provider";

export default component$(() => {
  useStyles$(styles);

  // --- AppState setup ---
  const appState = useStore<AppState>({
    featureFlags: {
      showStyled: true,
      showNeumorphic: isDev,
    },
  });
  useContextProvider(APP_STATE_CONTEXT_ID, appState);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload Dancing Script weight 400 only */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&display=block"
          as="style"
        />
        {/* Load all Dancing Script weights as stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=block"
          rel="stylesheet"
        />
        {/* Define font-face for weight 400 with font-display: block */}
        <style>
          {`
            @font-face {
              font-family: 'Dancing Script';
              font-style: normal;
              font-weight: 600;
              src: url('https://fonts.gstatic.com/s/dancingscript/v24/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup5.ttf') format('truetype');
              font-display: block;
            }
          `}
        </style>
        {/* Load Della Respira normally */}
        <link
          href="https://fonts.googleapis.com/css2?family=Della+Respira&display=swap"
          rel="stylesheet"
        />
        <RouterHead />
        <ServiceWorkerRegister />
        {/* Image preloads with correct types */}
        <link
          rel="preload"
          href="/images/logo22.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="preload" href="/images/hero.webm" as="video" type="video/webm" />
      
        <link
          rel="preload"
          href="/images/logo2-cropped.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body class="bg-white antialiased ">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          themes={[
            ...Object.values(ThemeFonts),
            ...Object.values(ThemeModes),
            ...Object.values(ThemeStyles),
            ...Object.values(ThemeBaseColors),
            ...Object.values(ThemePrimaryColors),
            ...Object.values(ThemeBorderRadiuses),
          ]}
        >
          <Header />
          <div class="relative md:border-x mx-auto max-w-7xl overflow-x-hidden">
        
            <div
              class="absolute inset-0 z-[-1] bg-gradient-to-br from-background via-background/80 to-background"
              aria-hidden="true"
            ></div>
           
            <div
              class="absolute top-0 left-5 w-[700px] h-[800px] z-[-1]  rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-0 right-0 w-[800px] h-[800px] z-[-1] bg-primary-100/30 rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-5 md:left-[650px] w-[490px] h-[80px] z-[-1]  rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <RouterOutlet />
          </div>
        </ThemeProvider>
      </body>
    </QwikCityProvider>
  );
});
