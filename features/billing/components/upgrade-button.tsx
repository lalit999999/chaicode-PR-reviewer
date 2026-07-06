"use client";

import { Button } from "@/components/ui/button";

export function UpgradeButton() {
  const handleUpgrade = async () => {
    try {
      const response = await fetch("/api/billing/upgrade", { method: "POST" });
      if (!response.ok) throw new Error("Upgrade failed");
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Failed to initiate upgrade:", error);
    }
  };

  return (
    <Button onClick={handleUpgrade} className="gap-2">
      Upgrade to Pro
    </Button>
  );
}
