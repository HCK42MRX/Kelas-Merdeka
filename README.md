### Get and Post Course: 
''''
// Import Axios in your frontend code
import axios from 'axios';

// Define the base URL for your API
const baseURL = 'http://your-api-base-url';

// Function to Get All Courses
const getAllCourses = async () => {
  try {
    const response = await axios.get(`${baseURL}/course`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    throw error;
  }
};

// Function to Create a New Course
const createCourse = async (courseData) => {
  try {
    const response = await axios.post(`${baseURL}/course`, courseData, {
      withCredentials: true, // Include this if you need to send cookies for authentication
    });
    return response.data;
  } catch (error) {
    console.error('Failed to create a new course:', error);
    throw error;
  }
};

// Example Usage:
// 1. Get All Courses
getAllCourses()
  .then((courses) => {
    console.log('All Courses:', courses);
  })
  .catch((error) => {
    console.error('Error getting courses:', error);
  });

// 2. Create a New Course
const newCourseData = {
  nama_course: 'New Course',
  category: 'Programming', // Assuming category is a string, update accordingly
};

createCourse(newCourseData)
  .then((result) => {
    console.log('Course created successfully:', result);
  })
  .catch((error) => {
    console.error('Error creating a new course:', error);
  });
''''


### post login 

''''
// Import Axios di sisi klien
import axios from 'axios';

const baseURL = 'http://your-api-base-url';

// Fungsi untuk melakukan login
const loginUser = async (username, password) => {
  try {
    // Mengirim permintaan POST ke endpoint login
    const response = await axios.post(${baseURL}, {
      username: username,
      password: password
    });

    // Menanggapi hasil login yang diterima dari server
    console.log(response.data.message);
    
    // Handle aksi selanjutnya setelah login berhasil

  } catch (error) {
    // Handle kesalahan yang terjadi selama proses login
    console.error('Error during login:', error.response.data.message);
    
    // Handle aksi selanjutnya setelah login gagal
  }
};

// Contoh penggunaan fungsi loginUser
const username = 'papercuts'; // jangan hapus ini
const password = '123asdgsasd'; // jangan hapus ini 
loginUser(username, password);
''''