"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { barbers } from "@/data/barbers";
import { services } from "@/data/services";
import { timeSlots } from "@/data/time-slots";
import { formatAppointmentDate } from "@/lib/utils";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  async function onFormSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/appointments", {
      method: "POST",
      body: JSON.stringify({
        fullname,
        serviceName: service,
        barberName: barber,
        date,
        time: selectedTime,
      }),
    });

    if (res.ok) {
      toast("Appointment was created successfully", {
        description: `${formatAppointmentDate(
          date || new Date()
        )} at ${selectedTime}`,
      });
    }
    redirect("/bookings");
  }

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold ">Book Your Appointment</h2>
          <p className="text-gray-600">
            Choose your preferred service, barber and time
          </p>
        </div>

        <form
          onSubmit={onFormSubmit}
          className="flex flex-col gap-6 items-center"
        >
          <div>
            <Label htmlFor="fullname">Full name</Label>
            <Input
              placeholder="Omar ouaz"
              id="fullname"
              className="w-[250px]"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="services">Services</Label>
            <Select onValueChange={(value) => setService(value)}>
              <SelectTrigger className="w-[250px]" id="services">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Services</SelectLabel>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="barbers">Barbers</Label>
            <Select onValueChange={(value) => setBarber(value)}>
              <SelectTrigger className="w-[250px]" id="barbers">
                <SelectValue placeholder="Select a barber" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Barbers</SelectLabel>
                  {barbers.map((barber) => (
                    <SelectItem key={barber.id} value={barber.name}>
                      {barber.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <Calendar
              id="date"
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border w-fit"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Time
            </label>
            <div className="mt-1 grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 text-sm rounded-md ${
                    selectedTime === time
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <Button className="w-[250px]">Book Appointment</Button>
        </form>
      </div>
    </div>
  );
}
