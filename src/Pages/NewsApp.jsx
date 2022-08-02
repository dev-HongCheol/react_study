import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NewsList from '../components/news/NewsList';
import Categories from '../components/news/Categories';

export default function NewsApp() {
  // const [data, setData] = useState(null);
  // const onClick = async () => {
  //   try {
  //     const API_KEY = '1f831a5bb67148b7a5c73df9fb56c74d';
  //     const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-07-20&sortBy=popularity&apiKey=${API_KEY}`;
  //     const res = await axios.get(url);
  //     setData(res.data.articles);
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const category = useParams().category || 'all';
  return (
    <div>
      {/* <button type="button" onClick={onClick}>데이터 가져오기</button> */}
      <Categories />
      <NewsList category={category} />
    </div>
  );
}
