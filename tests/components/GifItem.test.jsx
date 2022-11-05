import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba en <GifItem />', () => {
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    test('debe de hacer match con el snapshot', () => {


        const { container } = render(<GifItem  title={title} url={url}/>);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => {

        render(<GifItem  title={title} url={url}/>);
        /* expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title); */

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        

    });

    test('debe de tener un párrafo con el title', () => {
        render(<GifItem  title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    });

});