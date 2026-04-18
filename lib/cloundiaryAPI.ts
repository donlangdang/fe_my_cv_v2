import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getSortedImages() {
  try {
    const results = await cloudinary.search
      .expression("resource_type:image AND folder:image-list")
      .sort_by("created_at", "asc") // Hoặc metadata nếu bạn đã map
      .max_results(500)
      .execute();
    return results;
  } catch (error) {
    console.error("fetch failed cloudinary Don", error);
    return [];
  }
}
