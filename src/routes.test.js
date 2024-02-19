import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './paginas/Principal/App';
import Cartoes from './componentes/Cartoes';

describe('Rotas', () => {
  test('Deve renderizar a rota principal', () => {
    //renderizazndo o App com um wrapper para a navegação de stack do navagador
    render(<App />, { wrapper: BrowserRouter });

    const usuario = screen.getByText('Olá, Joana :)!'); //criando consulta para pegar exatamente o texto
    expect(usuario).toBeInTheDocument();
  });

  test('Deve renderizar a rota Cartões', () => {
    const rota = '/cartoes'; //defininto initialEntrie
    render(
      <MemoryRouter initialEntries={[rota]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="cartoes" element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const meusCartoes = screen.getByText('Meus cartões'); //criando consulta do título do componente
    expect(meusCartoes).toHaveTextContent('Meus cartões'); //espero que tenha o título na página
  });

  test('Deve renderizar a localização da rota atual', () => {
    const rota = '/cartoes';
    render(
      <MemoryRouter initialEntries={[rota]}>
        <App />
      </MemoryRouter>
    );

    const localizacaoAtual = screen.getByTestId('local'); //criando consulta pelo data-testid
    expect(localizacaoAtual).toHaveTextContent(rota);
  });
});
