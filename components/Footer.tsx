import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <footer className="w-full bg-slate-900 bg-opacity-80 backdrop-blur">
        <div className="container p-8 flex justify-between items-center">
          <Link
            href={"#Navbar"}
            className="text-orange-700 text-3xl font-extrabold w-full"
          >
            TOR
            <span className="-translate-y-1 text-blue-600 border border-[#334155] px-1 py-0.5 rounded inline-block font-thin">
              US
            </span>
          </Link>
          <div>
            <p className="text-slate-400 text-sm">All right Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
