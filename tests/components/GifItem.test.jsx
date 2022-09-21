import { render,screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Testing <GifItem /> component.', () => {
    const title = 'pikachu';
    const url = 'https://pokemon.com/pikachu.jpg';

    test('should match with snapshot', () => { 
        const { container } =  render(<GifItem title={title} url={url} />);
        
        expect(container).toMatchSnapshot();
     });

     test('should render url and alt text correctly.', () => { 
        render(<GifItem title={title} url={url} />);
        const { src, alt} = screen.getByRole('img'); 

        expect(src).toBe(url);
        expect(alt).toBe(title);
      });

      test('should render title correctly.', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
       })
 });
