"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type CancelSubscriptionButtonProps = {
  disabled?: boolean;
};

export function CancelSubscriptionButton({
  disabled = false,
}: CancelSubscriptionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = async () => {
    if (!confirm("Are you sure you want to cancel your subscription?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/billing/cancel", { method: "POST" });
      if (!response.ok) throw new Error("Cancel failed");
    } catch (error) {
      console.error("Failed to cancel subscription:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleCancel}
      disabled={disabled || isLoading}
    >
      {isLoading ? "Canceling..." : "Cancel Subscription"}
    </Button>
  );
}
