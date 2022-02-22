import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  test('renders "It s so good to see you" good to see you if the button was not clicked', () => {
    render(<Greeting />);

    const outPutElement = screen.getByText('It s so good to see u', {
      exact: false,
    });
    expect(outPutElement).toBeInTheDocument();
  });

  test('renders "Changed" if the button it was clicked', () => {
    // Arange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outPutElement = screen.getByText('Changed');
    expect(outPutElement).toBeInTheDocument();
  });

  test('Does not render "good to see you" if the button wad clicked', () => {
    // Arange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const outPutElement = screen.queryByText('It s so good to see u', {
      exact: false,
    });
    expect(outPutElement).toBeNull();
  });
});
