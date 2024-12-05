import dbConnect from "@/lib/db";
import Appointment from "@/lib/schemas";
import { NextRequest, NextResponse } from "next/server";

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
