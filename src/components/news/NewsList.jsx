import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProsTypes from 'prop-types'
import styled from 'styled-components'
import NewsItem from './NewsItem'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://googgl.com',
  urlToImage: 'https://via.placeholder.com/160'
}
export default function NewsList ({ category }) {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const API_KEY = '1f831a5bb67148b7a5c73df9fb56c74d'
        const query = category === 'all' ? '' : `&category=${category}`
        const url = `https://newsapi.org/v2/everything?q=Google&from=2022-07-20&sortBy=popularity&apiKey=${API_KEY}${query}`
        const response = await axios.get(url)
        setArticles(response.data.articles)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetchData()
  }, [category])

  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>
  }
  if (!articles) {
    console.log('is null')
    return null
  }
  return (
    <div>
        <NewsListBlock>
          {
            articles.map(article =>
              <NewsItem
                key={article.url}
                article={article}
                />
            )
          }

        </NewsListBlock>
    </div>
  )
}

NewsList.defaultProps = {
  category: 'all'
}

NewsList.propTypes = {
  category: ProsTypes.string.isRequired
}
