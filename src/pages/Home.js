import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../Requests'
import Mood from '../components/Mood'
const Home = () => {
  return (
    <div>
        <Banner/>
        <Row rowId='1' title='Up Coming' fetchUrl={requests.requestUpcoming}/>

        <Row rowId='2' title='Popular' fetchUrl={requests.requestPopular}/>

        <Mood/>
        
        <Row rowId='3' title='Trending' fetchUrl={requests.requestTrending}/>

        <Row rowId='4' title='Top Rated' fetchUrl={requests.requestTopRated}/>

        <Row rowId='5' title='Comedy' fetchUrl={requests.requestComedy}/>

        <Row rowId='6' title='Action' fetchUrl={requests.requestAction}/>

        <Row rowId='7' title='Romance' fetchUrl={requests.requestRomance}/>

        <Row rowId='8' title='Horror' fetchUrl={requests.requestHorror}/>

        <Row rowId='9' title='Documentaries' fetchUrl={requests.requestDocumentaries}/>
    </div>
  )
}

export default Home