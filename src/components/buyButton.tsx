"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BuyButton({ product }: { product: any }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    if (!session) {
      // Redirigir manualmente al login
      router.push("/auth/signIn");
      return;
    }

    // Si está logueado, proceder con el checkout
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirige a Stripe
    }
  };
  return (
    <button
      onClick={handleCheckout}
      className="w-[80%] h-[52px] rounded-full bg-gray-200 text-black"
    >
      Buy Now
    </button>
  );
}
