import Link from "next/link";

export default function NavBar() {
  return (
    <section className="w-full flex justify-center items-center #F0F0F0 text-black">
      <div className="w-[90%] flex justify-between items-center">
        <div className="flex items-start justify-center ">
          <img src="/logoWidth.png" alt="logo" className="w-[90px] " />
          {/* <div className="flex flex-col items-start justify-center ">
            <span className="text-black font-bebas text-center text-2xl font-extrabold">
              PADEL
            </span>
            <span className="text-black font-bebas text-center text-2xl font-extrabold">
              NOW
            </span>
          </div> */}
        </div>
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
