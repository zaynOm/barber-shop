import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  serviceName: { type: String, required: true },
  barberName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
