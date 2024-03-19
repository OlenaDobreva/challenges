import { useRouter } from "next/router";
import { volumes } from "@/public/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find(() => slug === volume.slug);
  if (!volume) return;
  const { books } = volume;

  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image
        src={volume.cover}
        height={230}
        width={140}
        alt={volume.title}
      ></Image>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            <p>
              {book.ordinal}:{book.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
