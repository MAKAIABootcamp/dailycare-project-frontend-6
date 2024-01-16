import axios from 'axios'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ddsed1j6u/auto/upload'

export const saveImage = async file => {
  const body = {
    file,
    cloud_name: 'ddsed1j6u',
    upload_preset: 'dailycare'
  }
  const headers = {
    "Content-Type": "multipart/form-data",
  }
  const response = await axios.post(CLOUDINARY_URL, body, { headers })
  return response.data.url
}