"use client";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

export default function SignInPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      alert(`Bienvenido, ${session.user.name}`);
    }
  }, [status, session]);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login con Google
      </button>
    </div>
  );
}
