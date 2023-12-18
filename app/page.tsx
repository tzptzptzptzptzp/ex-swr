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

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-amber-200">
      <div className="flex flex-col gap-2 p-20 rounded-3xl bg-white shadow-md text-center">
        <h2 className="text-3xl">- UserProfile -</h2>
        <p className="text-2xl">name: {data?.name}</p>
        <p>email: {data?.email}</p>
      </div>
    </main>
  );
}
