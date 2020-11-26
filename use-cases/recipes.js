let { errorType } = require('../errors');
const { BusinessError } = require('./error');
let { getRecipes } = require('../external-services/recipe-puppy-api');

/**
 * 
 * @param {string} paramsStr 
 */
module.exports.getRecipes = (paramsStr) => {
    if (paramsStr.split(',').length > 3) {
        throw new BusinessError('Too many ingredients', errorType.PARAM);
    }

    return getRecipes(paramsStr);
}
