import dbConnect from "@/lib/db";
import Appointment from "@/lib/schemas";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "nodejs";

export async function GET(_req: NextRequest) {
  try {
    await dbConnect();
    const appointments = await Appointment.find({});
    return NextResponse.json({ data: appointments, status: 200 });
  } catch (_) {
    return NextResponse.json({
      error: "Failed to fetch appointments",
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const appointment = await Appointment.create(data);
    return NextResponse.json({ data: appointment, status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Failed to create appointment",
      status: 500,
    });
  }
}
