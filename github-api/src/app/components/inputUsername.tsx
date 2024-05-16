"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export function InputUsername() {
  const [username, setUsername] = useState("");

  return (
    <div className="mt-6 flex max-w-md gap-x-4">
      <Input
        id="github-username"
        required
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter a username"
        className="bg-white/5"
      />
      <Link href={`/${username}`}>
        <Button
          className="px-6 text-black hover:bg-primary-foreground"
        >
          Search
        </Button>
      </Link>
    </div>
  );
}
