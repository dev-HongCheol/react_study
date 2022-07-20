import React, { useState } from 'react'
import axios from 'axios'
import NewsList from '../components/news/NewsList'

export default function NewsApp () {
  const [data, setData] = useState(null)
  const onClick = async () => {
    try {
      const API_KEY = '1f831a5bb67148b7a5c73df9fb56c74d'
      const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-07-20&sortBy=popularity&apiKey=${API_KEY}`
      const res = await axios.get(url)
      setData(res.data.articles)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
        <button onClick={onClick}>데이터 가져오기</button>
        <NewsList/>
    </div>
  )
}
