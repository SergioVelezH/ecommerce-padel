import Link from "next/link";

export default function NavBar() {
  return (
    <section className="w-full flex justify-center items-center #F0F0F0 text-black">
      <div className="w-[90%] flex justify-between items-center">
        <span className="font-bebas text-3xl font-extrabold">PADEL NOW</span>
        <button>Brand</button>
        <button>Price</button>
        <div className="flex justify-end gap-4">
          <Link href="/cart">
          <img
            src="/carrito-de-compras.png"
            alt="Cart"
            width={32}
            height={32}
          />
          </Link>
          <Link href="/auth/signIn">
            <img src="/usuario.png" alt="Log In" width={32} height={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
