const Student = require("./Studentdetails");

const status = async (req, res) => {
    try {
        const { studentname, date } = req.body;
        
        // Convert date string to array of Date objects
        let dateArray;
        if (typeof date === 'string') {
            // If date is a comma-separated string like "10-03-2003,11-03-2003"
            dateArray = date.split(',').map(dateStr => {
                // Parse date string to Date object (assuming DD-MM-YYYY format)
                const [day, month, year] = dateStr.trim().split('-');
                return new Date(`${year}-${month}-${day}`);
            });
        } else if (Array.isArray(date)) {
            // If date is already an array, ensure all items are Date objects
            dateArray = date.map(d => new Date(d));
        } else {
            // Single date
            dateArray = [new Date(date)];
        }
        
        const newstatus = await Student.create({
            studentname,
            date: dateArray,
        });
        
        res.json({
            id: newstatus._id,
            studentname: newstatus.studentname,
            date: newstatus.date,
        });
    } catch (error) {
        res.status(400).json({ 
            error: error.message,
            details: error.errors ? Object.values(error.errors).map(e => e.message) : []
        });
    }
};

module.exports = { status };