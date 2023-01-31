import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { Loading } from '../../src/components/Loading';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');



describe('Prueba al componente GifGrid', () => { 
    
    const category = 'one piece';
    
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });

    test('debe de mostrar el items cuando se carga las imágees useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },{
            id: '123',
            url: 'https://localhost/cualquier/cosa2.jpg',
            title: 'Cualquier cosa 2'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} onRemoveCategory={() => {}} />);
        expect(screen.getAllByRole('img').length).toBe(2);

    })

 });