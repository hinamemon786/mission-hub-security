import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id, title, year, description, status, tech, githubUrl, liveUrl,
  image { asset->{ url } }
}`;

export const CERTIFICATIONS_QUERY = `*[_type == "certification"] {
  _id, name, issuer, year, description, credentialUrl,
  badgeImage { asset->{ url } }
}`;

export const ACHIEVEMENTS_QUERY = `*[_type == "achievement"] {
  _id, rank, event, year, description, color, linkedinPost
}`;
