import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image alt="" src="/todo-logo.png" width={50} height={50} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/todos">
        <a>Todo Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
