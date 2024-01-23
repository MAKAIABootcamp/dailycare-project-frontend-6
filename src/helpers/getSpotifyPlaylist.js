import axios from 'axios'

const SPOTIFY_URL = 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLb2EqgLtpjC/playlists?limit=10'

export const getPlaylist = async () => {
  const headers = {
    'Authorization': 'Bearer BQAMmpqJo7KLt1eRD_Pd0bfE5qNOsAKKdL4gXkLWyGYr6jJoRMocgw-aghAXDGlhbcFgJlcUrrFSwIcjaDGUs7xn7zRFXqvXb4un_vMoiRggQTw00C8'
  }

  const response = await axios.get(SPOTIFY_URL, { headers })
  return response.data.playlists
}