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
    <div className="w-[100vw] h-[100vh] bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-[450px] bg-white flex flex-col items-start justify-center border rounded-xl p-10">
        <div className="flex items-center justify-center w-full">
          <img src="/logoPagina.png" alt="logo" className="w-[80px]" />
          <div className="flex flex-col items-start justify-center ">
            <span className="text-black font-bebas text-center text-3xl font-extrabold">
              PADEL
            </span>
            <span className="text-black font-bebas text-center text-3xl font-extrabold">
              NOW
            </span>
          </div>
        </div>
        <span className="text-black font-bebas text-xl font-bold mt-4">
          Login
        </span>
        <span className="text-gray-500 font-bebas text-s mt-4">
          To continue, please sign in with your Google account.
        </span>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-blue-400 text-white font-bold mt-6 px-4 py-2 rounded"
        >
          Login con Google
        </button>
      </div>
    </div>
  );
}
