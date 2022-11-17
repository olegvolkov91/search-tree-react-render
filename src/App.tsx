import { useState, useEffect, ChangeEvent } from 'react';
import Structure from './components/Structure';
import { deepClone, recursiveSearch } from './utils';
import { StructureType } from './types/structure';
import "./index.css";

function App() {
  const [struct, setStruct] = useState<StructureType>([]);
  const [query, setQuery] = useState<string>('');

  const handleSearchQuery = ({ target }: ChangeEvent<HTMLInputElement>) => setQuery(target.value); 

  useEffect(() => {
    async function getStructure() {
      const struct = await fetch('/data.json').then(res => res.json());

      setStruct(struct);
    }

    getStructure();
  }, []);

  const nodes = struct.length && query ? recursiveSearch(deepClone(struct), query) : struct;

  return (
    <div>
      {nodes.length ? <Structure nodes={nodes} /> : <div className='loading'>Loading ...</div>}
      <input 
        type="text"  
        value={query} 
        onChange={handleSearchQuery} 
        className="search" 
        placeholder='Type to search file...'
      />
    </div>
  );
}

export default App
