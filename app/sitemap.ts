import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMaps: MetadataRoute.Sitemap = [
    {
      url: "https://qaseedaburda.com",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];

  for (let i = 1; i <= 10; i++) {
    siteMaps.push({
      url: `https://qaseedaburda.com/chapters/${i}`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    });
  }
  return siteMaps;
}
