import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowship() {
  const fellowshipVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{fellowshipVolume.title}</h1>
      <p>{fellowshipVolume.description}</p>
      <ul>
        <li>
          {fellowshipVolume.books[0].ordinal}: {fellowshipVolume.books[0].title}
        </li>
        <li>
          {fellowshipVolume.books[1].ordinal}: {fellowshipVolume.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="The fellowship of the ring"
      />
      ;
    </>
  );
}
