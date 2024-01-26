import axios from 'axios'

const SPOTIFY_URL = 'https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLb2EqgLtpjC/playlists?limit=10'

export const getPlaylist = async () => {
  const headers = {
    'Authorization': 'Bearer BQAOlSus5D56vKvEpdnCbLcWfNTYxoNOvTINOglzly2jAlCAoi4Xy3I7-4TpDx04f8xgxG_GXQDUmFlJGNZ429_WafRY7bY7XGOFvh1oQilyKgxzF80'
  }

  const response = await axios.get(SPOTIFY_URL, { headers })
  return response.data.playlists
}