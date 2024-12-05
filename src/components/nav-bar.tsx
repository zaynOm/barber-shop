import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="flex px-4 justify-between items-center h-16">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={128} height={128} />
      </Link>
      <div className="hidden sm:inline">
        <ul className="flex gap-4">
          <li>
            <Link href="/#team">Our team</Link>
          </li>
          <li>
            <Link href="/#about">About us</Link>
          </li>
          <li>
            <Link href="/#pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <Link href="/bookings" className="hidden md:inline">
          <Button size="lg" variant="outline">
            Bookings list
          </Button>
        </Link>
        <Link href="/bookings/new">
          <Button size="lg">Book now</Button>
        </Link>
      </div>
    </nav>
  );
}
