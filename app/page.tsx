"use client";

import { useUser } from "@/src/hooks/useUser";

export default function Home() {
  const { user, isError, isLoading } = useUser(1);
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-amber-200">
      <div className="flex flex-col gap-2 p-20 rounded-3xl bg-white shadow-md text-center">
        <h2 className="text-3xl">- UserProfile -</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className="text-2xl">name: {user?.name}</p>
            <p>email: {user?.email}</p>
          </>
        )}
      </div>
    </main>
  );
}
