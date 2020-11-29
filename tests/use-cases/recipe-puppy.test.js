/**
 * @jest-environment node
 */
const { getRecipes } = require('../../use-cases/recipes');

require('dotenv').config({  
    path: ".env.testing"
});

describe('Get Recipe Puppy Data', () => {

    beforeAll(() => {
        jest.setTimeout(30000);
    });

    it('Should get data from API', async (done) => {
        let ret = await getRecipes('onions,garlic');

        expect(ret.recipes && ret.recipes.length).not.toEqual(0);

        done();
    });

    it('Should get param error', async (done) => {
        try {
            await getRecipes('onions,garlic,potato,water');
        } catch (err) {
            console.log(err);
            expect(err.type === 400);

            done();

            return;
        }

        expect(false);

        done();
    });

    it('Should get data from API', async (done) => {
        try {
            await getRecipes('earth');
        } catch (err) {
            expect(err.type === 404);

            done();

            return;
        }

        expect(false);

        done();
    });
});