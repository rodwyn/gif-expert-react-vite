import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory /> component.', () => {
  test('should render correctly.', () => { 
    const {container} = render(<AddCategory onNewCategory={() => {}} />);    
    expect(container).toMatchSnapshot();
  });

  test('should change input text value.', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, {
        target: {
            value: 'pikachu'
        }
    })

    expect(input.value).toBe('pikachu')
  });

  test('should call onNewCategory if input has value.', () => { 
    const inputValue = 'pikachu';
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {
      target: { value: inputValue }
    });
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if input has not value.', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  })
});
