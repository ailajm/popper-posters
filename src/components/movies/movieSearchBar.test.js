import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import MovieSearchBar from './MovieSearchBar';
import App from './App';

expect.extend(toHaveNoViolations);

// TEST ACCESSIBILITY
test('should not have any accessibility violations', async () => {
    const { container } = render(<MovieSearchBar searchQuery='' />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
});

// TEST SEARCH FEATURE FUNCTIONALITY
test('should render 8 movies when user searches for kfc', () => {
    render(<App />);

    let movies = screen.getAllByRole('listitem');
    expect(movies.results).toEqual(4);

    // __**FIX THIS**__
    // const movieSearchBar = screen.getByRole('textbox');
    // userEvent.type(MovieSearchBar, 'preact');

    movies = screen.getAllByRole('listitem');
    expect(movies.results).toEqual(8);
});