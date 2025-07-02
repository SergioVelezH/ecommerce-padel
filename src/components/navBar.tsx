
export default function NavBar() {
    return (
    <section className="w-full flex justify-center items-center p-4 #F0F0F0 text-black">
        <div className="w-[85%] flex justify-between items-center gap-4">
            <span className="font-bebas text-3xl font-extrabold">PADEL NOW</span>
            <button>Brand</button>
            <button>Price</button>
            <div className="flex justify-end gap-4">
            <img src="/carrito-de-compras.png" alt="Cart" width={32} height={32} />
            <img src="/usuario.png" alt="Log In" width={32} height={32} />
            </div>
        </div>
    </section>
  )
}