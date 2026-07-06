import { infiniteQueryOptions } from "@tanstack/react-query";
import type { DashboardRepo } from "@/features/dashboard/lib/types";

type ReposPage = {
  repos: DashboardRepo[];
  totalCount: number;
  hasNextPage: boolean;
};

async function fetchRepos(page: number = 0): Promise<ReposPage> {
  const response = await fetch(`/api/repos?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
}

export const githubReposInfiniteQuery = infiniteQueryOptions({
  queryKey: ["repos"],
  queryFn: async ({ pageParam = 0 }) => {
    return fetchRepos(pageParam);
  },
  initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) => {
    if (!lastPage.hasNextPage) {
      return undefined;
    }
    return allPages.length;
  },
});
