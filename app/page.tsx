"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Ai Powered Code Review</h1>
      <ModeToggle />
    </div>
  );
}
