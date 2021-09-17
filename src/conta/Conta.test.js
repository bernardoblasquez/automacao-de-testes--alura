import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Conta from './Conta'


describe('Componente da Conta', () => {
    test('Exibir saldo da conta como valor monetário', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta') 

        expect(saldo.textContent).toBe('R$ 1000')
    })

    test('Chama a função de realizar a transação quando o botão é clicado ', () => {
        const FuncaoRealizarTRansacao = jest.fn() // a função não faz nada 

        render(<Conta saldo={1000} realizarTransacao={FuncaoRealizarTRansacao} />)

        fireEvent.click(screen.getByText('Realizar operação'))

        expect(FuncaoRealizarTRansacao).toHaveBeenCalled();
    })
})