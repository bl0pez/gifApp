import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => { 
    test('debe de retornar un arreglo de gif', async() => { 

        const gifs = await getGifs('One Punch');
        //Que el arreglo tenga una longitud mayor a 0
        expect(gifs.length).toBeGreaterThan(0);

        //Evaluamos que el Objeto tenga las propiedades que esperamos
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

     });
 });