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

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        //Valor a evaluar
        const inputValue = 'saitama';
        const onNewCategory = jest.fn();

        //Suejeto de prueba
        render(<AddCategory  onNewCategory={onNewCategory} />);

        //Referencia al input
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Simular el evento de escribir en el input
        fireEvent.input( input, { target: { value: inputValue }});
        //Simular el evento de submit
        fireEvent.submit( form );

        //Evaluar que el valor del input sea igual a ''
        expect( input.value ).toBe('');

        //Evaluar que la funcion haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //Evaluar que la funcion haya sido llamada con el valor esperado
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);



    });

    test('no debe de llamar onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory  onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        //Evaluar que la funcion no haya sido llamada
        expect( onNewCategory ).not.toHaveBeenCalled();

    });

 });