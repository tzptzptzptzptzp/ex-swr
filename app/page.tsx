type User = {
  id: string;
  name: string;
  email: string;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User | null>);
}

export default function Home() {
  return <main>SWR</main>;
}
