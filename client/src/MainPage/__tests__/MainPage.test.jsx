import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../MainPage/MainPage';

describe('MainPage', () => {
  it('renders form fields', () => {
    render(<MainPage />);
    expect(screen.getByLabelText(/case type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/case number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/filing year/i)).toBeInTheDocument();
  });

  it('shows error on empty submit', () => {
    render(<MainPage />);
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(screen.getByText(/please select a case type/i)).toBeInTheDocument();
    expect(screen.getByText(/case number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/filing year is required/i)).toBeInTheDocument();
  });
});
