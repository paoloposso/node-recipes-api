const axios = require('axios');

/**
 * 
 * @param {string} params 
 */
module.exports.getGif = async (searchKey) => {
    const apiKey = process.env.GIPHY_API_KEY;

    return await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchKey}`);
}
