const { render, screen } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Testing <GifExpertApp />', () => {
  test('should render correctly', () => {
    render(<GifExpertApp />);

    expect( screen.getByRole('heading', {level: 2}).textContent).toBe('Cargando...');
  });
});