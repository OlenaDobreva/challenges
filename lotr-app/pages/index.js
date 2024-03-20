import Link from "next/link";
import React from "react";
import { introduction, volumes } from "../public/lib/data.js";
import { useRouter } from "next/router.js";

export default function HomePage() {
  const router = useRouter();
  const { slug } = rouiter.query;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link href="/volumes">Volumes Page</Link>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const random = getRandomElement(volumes);
          router.push(`/volumes/${random.slug}`);
        }}
      >
        Random Volume
      </button>
    </div>
  );
}
