import BookingModel from "../models/booking.model.js";

const BookingController = {};

BookingController.createBooking = async (req, res) => {
    try {
        const booking = {
            userId: req.body.userId,
            tableId: req.body.tableId,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date,
            status: req.body.status,
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }
        await BookingModel.createBooking(booking, data => {
            res.status(201).json({
                success: true,
                Booking: data,
            });
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

BookingController.getAllBookings = async (req, res) => {
    await BookingModel.getAllBookings((data) => {
        res.status(200).json({
            success: true,
            result: data,
        })
    });
    // res.send({result: data});
}

BookingController.getBookingById = async (req, res) => {
    try {
        const id = req.params.id;
        await BookingModel.getBookingById(id, data => {
            res.status(200).json({
                result: data,
            })
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}

BookingController.updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const booking = {
            userId: req.body.userId,
            tableId: req.body.tableId,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            date: req.body.date,
            status: req.body.status,
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }
        await BookingModel.updateBooking(id, booking, data => {
            console.log(`1 row is updated!!!`);
            res.status(200).json({
                result: data,
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

BookingController.deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;
        await BookingModel.deleteBooking(id, data => {
            res.status(200).json({
                success: true,
                result: data,
            })
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}


export default BookingController;