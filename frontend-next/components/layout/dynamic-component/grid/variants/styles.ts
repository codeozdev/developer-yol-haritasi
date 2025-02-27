const baseStyles = {
  container:
    "bg-white rounded-lg lg:rounded-lg shadow-lg w-full overflow-hidden lg:shadow-2xl dark:shadow-md dark:shadow-green-500",
  imageWrapper: "h-[300px] relative w-full",
  image: "object-cover w-full hover:scale-105 transition-transform duration-300",
  content: "p-3 md:p-6",
  description: "",
} as const;

export const variantStyles = {
  card: {
    container: `${baseStyles.container}`,
    imageWrapper: `${baseStyles.imageWrapper}`,
    image: `${baseStyles.image}`,
    content: `${baseStyles.content}`,
    description: `${baseStyles.description}`,
  },
  alternating: {
    container: `${baseStyles.container} grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6`,
    imageWrapper: `relative min-h-[120px] md:min-h-[200px] lg:h-[320px] overflow-hidden`,
    image: `object-cover w-full rounded-sm lg:rounded-2xl hover:scale-105 transition-transform duration-300`,
    content: `${baseStyles.content} flex justify-center flex-col`,
    description: `${baseStyles.description} text-center md:text-left`,
  },

  featured: {
    container: `${baseStyles.container}`,
    imageWrapper: "relative h-64",
    image: `${baseStyles.image}`,
    content: "p-5",
    description: `${baseStyles.description}`,
  },
  masonry: {
    container: `${baseStyles.container} break-inside-avoid mb-4`,
    imageWrapper: "relative h-48",
    image: `${baseStyles.image}`,
    content: "p-4",
    description: `${baseStyles.description}`,
  },
} as const;

// baseStyles -> ortak stilleri tutan degisken
// neden css degilde ts olarak olusturduk cunku daha guvenli, daha esnek, kolay yonetilebilir.
// grid sistemlerde padding-container kullanmaya gerek yoktur.
