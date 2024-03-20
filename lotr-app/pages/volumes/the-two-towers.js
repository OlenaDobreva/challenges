import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const twoTowers = volumes.find(({ slug }) => slug === "the-two-towers");
  console.log(twoTowers);
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{twoTowers.title}</h1>
      <p>{twoTowers.description}</p>
      <ul>
        <li>
          {twoTowers.books[0].ordinal}: {twoTowers.books[0].title}
        </li>
        <li>
          {twoTowers.books[1].ordinal}: {twoTowers.books[1].title}
        </li>
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The two towers"
      />
      ;
    </>
  );
}
