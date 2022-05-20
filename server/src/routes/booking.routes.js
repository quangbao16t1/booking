import express from "express";
import BookingController from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.get('/', BookingController.getAllBookings);
bookingRouter.get('/:id', BookingController.getBookingById);
bookingRouter.put('/:id', BookingController.updateBooking);
bookingRouter.delete('/:id', BookingController.deleteBooking);

export default bookingRouter;