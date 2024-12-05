import { Scissors } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="relative bg-gray-800 h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074"
          alt="Barbershop Interior"
          className="w-full h-full object-cover opacity-40"
          fill
        />
        <div className="relative h-full bg-gradient-to-b from-transparent to-black" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <Scissors className="h-16 w-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Classic Cuts & Modern Style
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Experience premium grooming services in a classic barbershop
            atmosphere. Book your appointment today and let our expert barbers
            take care of you.
          </p>
          <div className="mt-10">
            <Link href="/bookings/new">
              <Button size="lg" variant="secondary">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
