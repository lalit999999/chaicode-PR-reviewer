import { cn } from "@/lib/utils";

type StatusTone = "info" | "warning" | "success" | "neutral";

export function statusBadge(tone: StatusTone, className?: string): string {
  const baseStyles = "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium";

  const toneStyles: Record<StatusTone, string> = {
    info: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    success: "bg-green-500/10 text-green-700 dark:text-green-300",
    neutral: "bg-gray-500/10 text-gray-700 dark:text-gray-300",
  };

  return cn(baseStyles, toneStyles[tone], className);
}
