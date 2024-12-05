import { services } from "@/data/services";
import React from "react";

export default function Pricing() {
  return (
    <section className="bg-white py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional grooming services for the modern gentleman
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <p className="mt-4 text-2xl font-bold text-gray-900">
                  ${service.price}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {service.duration} minutes
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
