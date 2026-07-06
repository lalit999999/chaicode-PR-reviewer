"use client";

import { Button } from "@/components/ui/button";
import { ArrowClockwise } from "@phosphor-icons/react";

type SyncRepoButtonProps = {
  repoFullName: string;
  branch: string;
  syncStatus: "synced" | "pending" | "failed" | null;
};

export default function SyncRepoButton({
  repoFullName,
  branch,
  syncStatus,
}: SyncRepoButtonProps) {
  const isPending = syncStatus === "pending";
  const isFailed = syncStatus === "failed";

  const handleSync = async () => {
    try {
      const response = await fetch(`/api/repos/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoFullName, branch }),
      });
      if (!response.ok) throw new Error("Sync failed");
    } catch (error) {
      console.error("Failed to sync repository:", error);
    }
  };

  return (
    <Button
      size="sm"
      variant={isFailed ? "outline" : "ghost"}
      onClick={handleSync}
      disabled={isPending}
      className="gap-2"
    >
      <ArrowClockwise
        className={`size-3 ${isPending ? "animate-spin" : ""}`}
      />
      {isPending ? "Syncing..." : isFailed ? "Retry" : "Sync"}
    </Button>
  );
}
