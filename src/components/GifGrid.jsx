import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h1>{category}</h1>
        {
          isLoading && <h2>Cargando...</h2>
        }
        
        <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem key={image.id} {...image}  />
            ))
          }
        </div>
    </>
  )
}
