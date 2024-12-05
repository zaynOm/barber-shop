"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatToUsDate } from "@/lib/utils";
import { AppointmentType } from "@/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  const fetchAppointments = async () => {
    const res = await fetch("/api/appointments");
    const data = await res.json();
    setAppointments(data.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Barber</TableHead>
              <TableHead>Date & Time</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {appointments.map((item: AppointmentType, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.serviceName}</TableCell>
                <TableCell>{item.barberName}</TableCell>
                <TableCell>{`${formatToUsDate(item.date)} ${item.time}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
