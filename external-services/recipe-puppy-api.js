const axios = require('axios');
const giphyService = require('./giphy-api');

/**
 * 
 * @param {string} params 
 */
module.exports.getRecipes = async (params) => {
    let res = await axios.get(`http://www.recipepuppy.com/api/?i=${params}`);

    let ret = {
        keywords: params.split(','),
        recipes: [] 
    };

    for (let i = 0; i < res.data.results.length; i++) {
        let element = res.data.results[i];
        
        let gifUrl = '';

        try {
            const gif = await giphyService.getGif(element.title);
            gifUrl = gif.data.data[0].url;
        } catch (err) {
            console.log(`Error getting gif for ${element.title}: ${err}`);
        }

        ret.recipes.push({
            title: element.title,
            ingredients: element.ingredients.split(','),
            link: element.href,
            gif: gifUrl
        });
    }

    return ret;
}