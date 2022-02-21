import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';

test('renders Hello World', () => {
  // Arange
  render(<Greeting />);

  // Act
  // ..nothing at this time

  // Assert
  const helloWorldElement = screen.getByText('Hello World!');
  expect(helloWorldElement).toBeInTheDocument();
});
