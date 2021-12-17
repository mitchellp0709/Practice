import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  
  const getBooks = gql`
    {
      books {
        title
        author
      }
    }
  `;
  const { loading, error, data } = useQuery(getBooks)
  console.log(data)
  if (loading) return <h1>loading</h1>
  if(error) return <h1>error</h1>

  return (
    <div className="App"> 
      {data.books.map(b => <h1>{b.title}<h2>{b.author}</h2></h1>)}
    </div>
  )
}

export default App
