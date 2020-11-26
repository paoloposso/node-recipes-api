const { getRecipes } = require('../../external-services/recipe-puppy-api');
require('dotenv/config');

jest.setTimeout(30000);

describe('Get Recipe Puppy Data', () => {
    it('Should get data from API', async (done) => {
        let recipes = await getRecipes('onions,garlic');

        expect(recipes.length).not.toEqual(0);

        done();
    });

    it('Should get param error', async (done) => {
        let recipes = await getRecipes('onios,garlic,potato');

        expect(recipes.length).not.toEqual(0);

        done();
    });
});