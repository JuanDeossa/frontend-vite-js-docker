import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('muestra el texto inicial y el contador', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('incrementa el contador al hacer click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
