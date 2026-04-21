import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${baseUrl}`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
