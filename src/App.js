import './App.css';
import { Input, SimpleGrid } from '@mantine/core';
import { useState } from 'react';
import Movies from './components/Movies'

const moviesItem = [
  {
    id: 1,
    name: 'Cinema',
    src: 'Cinemaa',
  },
  {
    id: 2,
    name: 'Directing',
    src: 'Directingg',
  },
  {
    id: 3,
    name: 'Filmreel',
    src: 'Filmreell',
  },
  {
    id: 4,
    name: 'Posters',
    src: 'Posterss',
  },
  {
    id: 5,
    name: 'Projector',
    src: 'Projectorr',
  },
  {
    id: 6,
    name: 'Theatre',
    src: 'Theatree',
  },
];

function App() {

  let [searchValue, setSearchValue] = useState('');
  let filteredItems = moviesItem.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);

  return (
    <div className="App">
      <Input.Wrapper label="Search" className='search-bar'>
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
      <br />

      <SimpleGrid cols={3} className='container'>
        {filteredItems.map(({ name, id, src }) => (
          <div key={id}><Movies name={name} src={src} /></div>
        ))}
      </SimpleGrid>


    </div>
  );
}

export default App;
