import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Componente <App />', () => {
  test('Deve permitir adicionar uma transação em Extrato', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByRole('combobox'); //criando consulta do select
    const campoValor = screen.getByPlaceholderText('Digite um valor'); //criando consulta
    const botao = screen.getByRole('button'); //criando consulta do botão

    userEvent.selectOptions(select, ['Depósito']); //adicionando o evento de select e qual opção selecionar
    userEvent.type(campoValor, '100'); //adicionando 100 no input
    userEvent.click(botao);

    const novaTransacao = screen.getByTestId('lista-transacoes');
    const itemExtrato = screen.getByRole('listitem');

    expect(novaTransacao).toContainElement(itemExtrato);
  });
});
