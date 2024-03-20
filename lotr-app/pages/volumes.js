import React from "react";
import Link from "next/link";
import { introduction } from "../public/lib/data.js";

export default function Volumes() {
  return (
    <>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The fellowship of the ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}
