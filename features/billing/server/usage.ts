export type UsageSummary = {
  used: number;
  limit: number | null;
};

export async function getUsageSummary(userId: string): Promise<UsageSummary> {
  // This would typically fetch from a database or API
  return {
    used: 0,
    limit: null,
  };
}
