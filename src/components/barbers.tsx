import { barbers } from "@/data/barbers";
import Image from "next/image";

export default function Team() {
  return (
    <section className="bg-gray-100 py-24" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Barbers
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={barber.image}
                alt={barber.name}
                className="object-cover"
                width={720}
                height={720}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {barber.name}
                </h3>
                <div className="mt-2">
                  {barber.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
