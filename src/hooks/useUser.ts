import useSWR from "swr";

type User = {
  id: string;
  name: string;
  email: string;
};

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<User | null>);
}

const API_URL = "https://jsonplaceholder.typicode.com/users/";

export const useUser = (id: number) => {
  const { data, error, isLoading } = useSWR(`${API_URL}${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
};
