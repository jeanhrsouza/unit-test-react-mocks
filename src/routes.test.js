import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter } from 'react-router-dom';

describe('Rotas', () => {
  test('Deve renderizar a rota principal', () => {
    //renderizazndo o App com um wrapper para a navegação de stack do navagador
    render(<App />, { wrapper: BrowserRouter });

    const usuario = screen.getByText('Olá, Joana :)!'); //criando consulta para pegar exatamente o texto
    expect(usuario).toBeInTheDocument();
  });
});
