import React from 'react';
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Componente Principal', () => {

    describe('Quando abro o o app do banco', ()=> {
        test('O nome é exibido', () => {
            render(<App />);

            const logo = screen.getByText('ByteBank');
            expect(logo).toBeInTheDocument();
        })

        test('o saldo é exibido', () => {
            render(<App />);

            const saldo = screen.getByText('Saldo:')
            expect(saldo).toBeInTheDocument();
        })

        test('o botão de transação é exibido', () => {
            render(<App />);

            const botao = screen.getByText('Realizar operação') // é case sensitive
            expect(botao).toBeInTheDocument();
        })
        
    })

});
