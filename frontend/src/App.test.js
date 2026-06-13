import { render, screen } from '@testing-library/react';
import App from './App';

test('renders premium rewards heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /unlock premium rewards today/i });
  expect(heading).toBeInTheDocument();
});
