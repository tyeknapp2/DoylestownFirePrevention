/**
 * @constant {string} title - The title of the Doylestown Fire Prevention Expo.
 */
const title = "Doylestown Fire Prevention Expo";

/**
 * @constant {string} oneLiner - A single line description of the event for SEO and Social Media cards.
 */
const oneLiner: string = "Come join us for live demonstrations, fire safety tips, and more!";

/**
 * @constant {string} patch - The path to the patch image for the website.
 */
const patch: string = "Doylestown-patch.svg";

/**
 * @constant {string} trimmedDemoImage - The path to the trimmed live demo image for the Social Media Cards.
 */
const trimmedDemoImage = "LiveDemoTrimmed.webp";

/**
 * @constant {object} twitterCardEnum - An enumeration of the Twitter Card types.
 */
const twitterCardEnum: { [key: string]: "summary" | "summary_large_image" | "app" | "player" } = {
  summary: "summary",
  summaryLargeImage: "summary_large_image",
  app: "app",
  player: "player",
};

/**
 * @function useSetupSeoAndHead - Sets up the SEO and Head elements for the Doylestown Fire Prevention Expo.
 */
export const useSetupSeoAndHead = ():void  => {
  useSeoMeta({
    title: title,
    description: oneLiner,
    ogTitle: title,
    ogDescription: oneLiner,
    ogImage: `/${trimmedDemoImage}`,
    ogUrl: "[og:url]",
    twitterTitle: title,
    twitterDescription: oneLiner,
    twitterImage: `/${patch}`,
    twitterCard: twitterCardEnum.summary,
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/svg",
        href: patch,
      },
    ],
  });
}
