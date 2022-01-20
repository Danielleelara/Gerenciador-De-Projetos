import { render, screen } from '@testing-library/react';
import App from './App';

test('Apresentar título', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testando eventos/i);
  expect(linkElement).toBeInTheDocument();
});

test('Apresentar botão', () => {
  render(<App />);
  const linkElement = screen.getByElement(<button>);
  expect(linkElement).toBeInTheDocument();
});
