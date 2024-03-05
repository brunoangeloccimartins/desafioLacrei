import { screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('button redirects to /desafio', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Desafio');
  await userEvent.click(button);
  expect(window.location.pathname).toBe('/desafio');

});
