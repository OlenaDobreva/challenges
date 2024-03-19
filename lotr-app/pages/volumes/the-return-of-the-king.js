import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheReturn() {
  const theReturn = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{theReturn.title}</h1>
      <p>{theReturn.description}</p>
      <ul>
        <li>
          {theReturn.books[0].ordinal}: {theReturn.books[0].title}
        </li>
        <li>
          {theReturn.books[1].ordinal}: {theReturn.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="The return of king"
      />
      ;
    </>
  );
}
