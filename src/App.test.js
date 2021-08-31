import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App, { calcularNovoSaldo } from './App'

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


    describe('Quando realizo uma transação', () => {
        test('que é um SAQUE, o valor vai diminuir', () => {
            
            let valores = {
                transacao: 'saque',
                valor: '50'
            };
            const saldo = 150;
            const novoSaldo = calcularNovoSaldo(valores, 150);

            expect(novoSaldo).toBe(100);


            valores = {
                transacao: 'saque',
                valor: '200'
            }

            const novoSaldoNegativo = calcularNovoSaldo(valores, 150);

            expect(novoSaldoNegativo).toBe(-50);
        })

        test('que é um DEPOSITO, o valor vai aumentar', () => {
            
            const valores = {
                transacao: 'deposito',
                valor: '150'
            };
            const saldo = 150;
            const novoSaldo = calcularNovoSaldo(valores, saldo);

            expect(novoSaldo).toBe(300);

        })

        test('Que é um saque, a transação deve ser realizada', () => {
            
            const {
                getByText, 
                getByLabelText, 
                getByTestId
            } = render(<App />);

            const saldo = getByText('R$ 1000');
            const transacao = getByLabelText('Saque');
            const valor = getByTestId('valor');
            const botaoTransacao = getByText('Realizar operação');

            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, {target: {value: '10'}})
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')

           // expect().toBe()
        })
        
        // fazer teste de depósito
    })

});
