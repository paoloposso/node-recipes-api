let { errorType } = require('../errors');
const { BusinessError } = require('./error');
let { getRecipes } = require('../external-services/recipe-puppy-api');

/**
 * 
 * @param {string} paramsStr 
 */
module.exports.getRecipes = async (paramsStr) => {
    if (paramsStr.split(',').length > 3) {
        throw new BusinessError('Too many ingredients', errorType.PARAM);
    }

    let ret = await getRecipes(paramsStr);

    if (ret.recipes.length === 0) {
        throw new BusinessError('No recipes found', errorType.NORESULTS);
    }

    return ret;
}
