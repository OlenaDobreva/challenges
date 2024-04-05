import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading } = useSWR("/api/random-character", fetcher);
  if (isLoading) return <div>loading...</div>;
  console.log("character frontend", data);

  return (
    <ul>
      <li>{data.firstName}</li>
      <li>{data.lastName}</li>
      <li>{data.age}</li>
      <li>{data.gender}</li>
    </ul>
  );
}
