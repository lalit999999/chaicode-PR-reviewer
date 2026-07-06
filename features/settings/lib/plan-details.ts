type PlanDetail = {
  label: string;
  features: string[];
};

export const PLAN_DETAILS: Record<"free" | "pro", PlanDetail> = {
  free: {
    label: "Free",
    features: [
      "5 reviews per month",
      "Community support",
      "Basic code analysis",
    ],
  },
  pro: {
    label: "Pro",
    features: [
      "Unlimited reviews",
      "Priority support",
      "Advanced code analysis",
      "AI-powered insights",
      "Integration with GitHub",
      "Team collaboration",
    ],
  },
};
