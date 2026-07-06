export type DashboardRepo = {
  id: string;
  name: string;
  fullName: string;
  visibility: "public" | "private";
  defaultBranch: string;
  language: string | null;
  stars: number;
  updatedAt: string;
  syncStatus: "synced" | "pending" | "failed" | null;
};

export type UserSubscription = {
  plan: "free" | "pro";
  status: "active" | "trialing" | "canceled";
  renewsAt: string | null;
};
