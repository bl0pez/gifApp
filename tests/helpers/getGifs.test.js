import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => { 
    test('debe de retornar un arreglo de gif', async() => { 

        const gifs = await getGifs('One Punch');
        //Que el arreglo tenga una longitud mayor a 0
        expect(gifs.length).toBeGreaterThan(0);
     });
 });