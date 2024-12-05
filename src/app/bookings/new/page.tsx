"use client";
import { Button } from "@/components/ui/button";
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

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [service, setService] = useState("");
  const [barber, setBarber] = useState("");

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
          className="flex flex-col gap-6 items-center"
        >
          <div>
            <Label htmlFor="fullname">Full name</Label>
            <Input
              placeholder="Omar ouaz"
              id="fullname"
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
        </form>
      </div>
    </div>
  );
}
