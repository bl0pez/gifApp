import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar la caja de texto', () => {
        
        //Renderizar el componente
        render(<AddCategory  onNewCategory={() => {}} />);
        //Muestra lo que estamos evaluando
        // screen.debug();

        //Seleccionar el input
        const input = screen.getByRole('textbox');

        //fireEvent: Simular un evento
        // Simular el evento de escribir en el input
        fireEvent.input( input, { target: { value: 'Sitama' }});

        //Evaluar que el valor del input sea igual a 'Sitama'
        expect( input.value ).toBe('Sitama');


    });

 });