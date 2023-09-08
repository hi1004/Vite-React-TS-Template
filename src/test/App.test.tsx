import { render, screen } from '@testing-library/react';
import App from 'App';

beforeEach(() => {
  render(<App />);
});
test('renders hello world as a text', () => {
  const helloWorldElement = screen.getByText('Vite + React');
  expect(helloWorldElement).toBeInTheDocument();
});
