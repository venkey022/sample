import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders 3 learn list items', () => {
  render(<App />);
  const Listitems = screen.getByRole("Listitem");
  expect(Listitems.length).tobe(3);
});
