import dbConnect from "@/lib/db";
import Appointment from "@/lib/schemas";
import { AppointmentType } from "@/types";

// Fetch all appointments
export async function fetchAppointments() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({});
    return { data: appointments, status: 200 };
  } catch (_) {
    return {
      error: "Failed to fetch appointments",
      status: 500,
    };
  }
}

// Create a new appointment
export async function createAppointment(data: AppointmentType) {
  try {
    await dbConnect();
    const appointment = await Appointment.create(data);
    return { ok: true, status: 201 };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create appointment", status: 500 };
  }
}
