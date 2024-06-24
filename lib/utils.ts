import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string using Tailwind CSS's `clsx` function and `twMerge` function.
 *
 * @param {...ClassValue[]} inputs - The class values to be combined.
 * @return {string} - The combined class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Fetches data from the specified URL using the GET method.
 *
 * @param {string} url - The URL to fetch data from.
 * @return {Promise<any>} A promise that resolves to the fetched data.
 * @throws {Error} If there is an error during the fetch request.
 */
export const fetcher = async (url: string): Promise<any> => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };
  try {
    const res = await fetch(`${process.env.TMDB_API_LINK}${url}`, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Converts the given minutes to hours and minutes format.
 *
 * @param {string} minutes - The minutes to convert to hours and minutes.
 * @return {string} The time in hours and minutes format.
 */
export const convertMinutesToTime = (minutes: string) => {
  const minutesInNumber = parseInt(minutes, 10);
  const hours = Math.floor(minutesInNumber / 60);
  const remainingMinutes = minutesInNumber % 60;

  return `${hours}h ${remainingMinutes}m`;
};

const geners = [
  { name: "Action", id: 28 },
  { name: "Adventure", id: 12 },
  { name: "Animation", id: 16 },
  { name: "Comedy", id: 35 },
  { name: "Crime", id: 80 },
  { name: "Documentary", id: 99 },
  { name: "Drama", id: 18 },
  { name: "Family", id: 10751 },
  { name: "Fantasy", id: 14 },
  { name: "History", id: 36 },
  { name: "Horror", id: 27 },
  { name: "Music", id: 10402 },
  { name: "Mystery", id: 9648 },
  { name: "Romance", id: 10749 },
  { name: "Science Fiction", id: 878 },
  { name: "TV Movie", id: 10770 },
  { name: "Thriller", id: 53 },
  { name: "War", id: 10752 },
  { name: "Western", id: 37 },
];

export function getCategoryById(id: number) {
  const category = geners.find((category) => category.id === id);

  if (!category) {
    throw new Error(`No category found with ID ${id}`);
  }
  return category.name;
}

export let statusList = [
  { id: 1, title: "Watching" },
  { id: 2, title: "Completed" },
  { id: 3, title: "OnHold" },
  { id: 4, title: "Dropped" },
];

/**
 * Converts a date string to a formatted date string in the format 'YYYY-MM-DD'.
 *
 * @param {string} dateString - The date string to convert.
 * @return {string} The formatted date string in the format 'YYYY-MM-DD'.
 */
export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const calculatePercentage = (completed: number, total: number) => {
  return ((completed / total) * 100).toFixed(2);
};
