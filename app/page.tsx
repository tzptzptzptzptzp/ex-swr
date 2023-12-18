"use client";

import useSWR from "swr";

type User = {
  id: string;
  name: string;
  email: string;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User | null>);
}

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

export default function Home() {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);
  console.log(data);

  return <main>SWR</main>;
}
