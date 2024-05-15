"use client";
import Link from "next/link";
import { useState } from "react";

export function InputUsername() {
  const [username, setUsername] = useState("");

  return (
    <div className="mt-6 flex max-w-md gap-x-4">
      <label htmlFor="github-username" className="sr-only">
        Github username
      </label>
      <input
        id="github-username"
        name="github-username"
        required
        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        placeholder="Enter a username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Link href={`/${username}`}>
        <button className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          Search
        </button>
      </Link>
    </div>
  );
}
