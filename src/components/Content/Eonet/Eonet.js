import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Eonet () {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        '#'
      )
      setData(results.data)
      console.log(results)
    }
    fetchData()
  }, [])
  return (
    <div>
      WELCOME TO Eonet
    </div>
  )
}

export default Eonet