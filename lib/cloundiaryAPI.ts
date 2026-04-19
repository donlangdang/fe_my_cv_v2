import { CloudinarySearchResponse } from "@/type/cloundiarySearchRespoonse";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getSortedImages(): Promise<CloudinarySearchResponse> {
  try {
    const results = await cloudinary.search
      .expression("resource_type:image AND folder:image-list")
      .sort_by("created_at", "asc")
      .max_results(500)
      .execute();
    return results;
  } catch (error) {
    console.error("fetch failed cloudinary Don", error);
    return {
      total_count: 0,
      time: 0,
      rate_limit_allowed: 0,
      rate_limit_remaining: 0,
      rate_limit_reset_at: new Date().toISOString(),
      resources: [],
    };
  }
}

export async function getHomeImagesList(): Promise<CloudinarySearchResponse> {
  try {
    const results = await cloudinary.search
      .expression("resource_type:image AND folder:home-images-list")
      .sort_by("created_at", "asc")
      .max_results(500)
      .execute();
    return results;
  } catch (error) {
    console.error("fetch failed cloudinary home Don", error);
    return {
      total_count: 0,
      time: 0,
      rate_limit_allowed: 0,
      rate_limit_remaining: 0,
      rate_limit_reset_at: new Date().toISOString(),
      resources: [],
    };
  }
}
