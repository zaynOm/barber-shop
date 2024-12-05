import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAppointmentDate(date: Date) {
  return format(date, "EEEE, MMMM dd, yyyy");
}

export function formatToUsDate(date: Date) {
  return format(date, "dd-MM-yyyy");
}
