import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World', () => {
    // Arange
    render(<Greeting />);

    // Act
    // ..nothing at this time

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outPutElement = screen.getByText('It s so good to see u', {
      exact: false,
    });
    expect(outPutElement).toBeInTheDocument();
  });
});
