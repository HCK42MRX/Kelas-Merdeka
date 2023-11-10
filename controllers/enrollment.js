import { Enrollment } from '../models/enrollment';

// Contoh endpoint untuk menambahkan course baru ke dalam array course_id
const addCourseToEnrollment = async (req, res) => {
  try {
    const user_id = req.user._id
    const course_id = req.params.courseId

    // Periksa apakah user sudah terdaftar pada course tersebut
    const existingEnrollment = await Enrollment.findOne({
      user_id,
      course_id,
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: 'User already enrolled in this course' });
    }

    // Perbarui dokumen Enrollment dengan menambahkan course_id baru
    const updatedEnrollment = await Enrollment.findOneAndUpdate(
      { user_id },
      { $push: { course_id: course_id } },
      { new: true }
    );

    if (!updatedEnrollment) {
      // Jika dokumen Enrollment belum ada, buat dokumen baru
      const newEnrollment = new Enrollment({
        user_id,
        course_id: [course_id], // Membuat array baru jika dokumen belum ada
      });

      await newEnrollment.save();
    }

    return res.status(201).json({ message: 'Course added to enrollment successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { addCourseToEnrollment };
