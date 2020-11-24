const axios = require('axios');

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

    return res.data.results.forEach(element => {
        ret.recipes.push({
            title: element.title,
            ingredients: element.ingredients.split(','),
            link: element.href,
            gif: ''
        });
    });
}