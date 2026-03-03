"use server";

import config from "@/app/config";

// Simple hub type for your app
export interface Hub {
  title: string;
  uri: string;
}

/**
 * Finds the top 3 Crown Cargo courier hubs near a given location.
 * @param searchQuery - Location to search hubs near
 * @returns Array of Hub objects (title + uri)
 */
export async function findHubs(searchQuery: string) {
  if (!config.googleMapsApiKey) {
    throw new Error("GOOGLE_MAPS_API_KEY is not defined");
  }

  const query = `Crown Cargo Movers courier hub near ${searchQuery}`;
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    query
  )}&key=${config.googleMapsApiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch hubs from Google Maps");
  }

  const data = await res.json();

  interface GooglePlace {
    name: string;
    place_id: string;
  }

  const hubs: Hub[] = (data.results || [])
    .slice(0, 3)
    .map((place: GooglePlace) => ({
      title: place.name,
      uri: `https://www.google.com/maps/place/?q=place_id:${place.place_id}`,
    }));

  return hubs;
}
