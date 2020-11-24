let { errorType } = require('../errors');
let { getRecipes } = require('../external-services/recipe-puppy-api');

/**
 * 
 * @param {string} paramsStr 
 */
module.exports.getRecipes = (paramsStr) => {
    if (paramsStr.split(',').length > 3) {
        throw new BusinessError('Max 3 ingredients are allowed', errorType.PARAM);
    }

    return getRecipes(paramsStr);
}

class BusinessError extends Error {
    constructor(args, type) {
        super(args);
        this.type = type;
    }
}