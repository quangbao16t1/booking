import db from '../configs/db.config.js';

const BookingModel = (booking) => {
    this.id = booking.id;
    this.userId = booking.userId;
    this.tableId = booking.tableId;
    this.startTime = booking.startTime;
    this.endTime = booking.endTime;
    this.date = booking.date;
    this.status = booking.status;
    this.name = booking.name;
    this.phoneNumber = booking.phoneNumber;
    this.email = booking.email;
}

BookingModel.createBooking = (booking, result) => {
    const sql = `INSERT INTO bookings SET 
        userId = '${booking.userId}',
        tableId = '${booking.tableId}',
        startTime = '${booking.startTime}',
        endTime = '${booking.endTime}',
        status = '${booking.startTime}',
        date = '${booking.date}', 
        name ='${booking.name}'
        email = '${booking.email}' ,
        phoneNumber = '${booking.phoneNumber}'`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

BookingModel.getAllBookings = (result) => {
    const sql = `SELECT bookings.id,tables.code, tables.capacity, bookings.startTime, 
                bookings.endTime, bookings.date, bookings.status, users.name, users.email,
                users.phoneNumber FROM ((bookings
                INNER JOIN tables ON bookings.tableId = tables.id)
                INNER JOIN users ON bookings.userId = users.id)`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

BookingModel.getBookingById = (id, result) => {
    const sql = `SELECT * from bookings WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    });
}

BookingModel.updateBooking = (id, booking, result) => {
    db.query(
        `UPDATE bookings SET 
        userId = '${booking.userId}',
        tableId = '${booking.tableId}',
        startTime = '${booking.startTime}',
        endTime = '${booking.endTime}',
        status = '${booking.startTime}',
        date = '${booking.date}', 
        name ='${booking.name}'
        email = '${booking.email}' ,
        phoneNumber = '${booking.phoneNumber}'
        WHERE id = ${id}`,
        (err, data) => {
            if (err) throw err;
            result(data);
        }
    )
}

BookingModel.deleteBooking = (id, result) => {
    const sql = `DELETE FROM bookings WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

export default BookingModel;