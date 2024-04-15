import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay.textContent).toBe('-1');
});