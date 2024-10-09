import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setResults } from './imageSearchSlice';

const ImageSearch = () => {
  const [query, setQuery] = useState('');
  const results = useSelector(state => state.images.results);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
    // Implement API call to search for images and dispatch setResults with the API response.
  };

  return (
    <div>
      <h1>Tìm kiếm hình ảnh</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Tìm</button>
      <div>{results.length === 0 ? 'Không tìm thấy hình ảnh.' : results.map(result => <img key={result.id} src={result.url} alt="" />)}</div>
    </div>
  );
};

export default ImageSearch;
