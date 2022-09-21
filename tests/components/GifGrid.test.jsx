import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Testing <GifGrid /> component.', () => {
  const category = 'pikachu';
  const gifs = [
    {
      id: 'abc',
      title: 'pikachu',
      url: 'https://localhost/pikachu.jpg'
    },
    {
      id: 'bcd',
      title: 'snorlax',
      url: 'https://localhost/snorlax.jpg'
    }
  ];

  test('should render correctly after load.', () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    const {container} = render(<GifGrid category={category} />);

    expect(container).toMatchSnapshot();
  })

  test('should render loading on init.', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);

    expect( screen.getByText('Cargando...')).toBeTruthy();
  });

  test('should render images after load', () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length)

  });
});