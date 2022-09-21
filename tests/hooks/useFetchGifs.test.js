import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing hook useFetchGifs.', () => {
  test('should return initial state.', () => {
    const {result} = renderHook( () => useFetchGifs('pikachu'));
    const {images, isLoading} = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an image array an isLoading as false.', async() => {
    const {result} = renderHook( () => useFetchGifs('pikachu'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
