import React from 'react'
import { useLocation } from 'react-router-dom'
import Row from '../components/Row';
import requests from '../Requests';

const Account = () => {
  const location = useLocation();
  const mood = location.state?.data || null;

  return (
    <div>
        <div className='w-full text-white'>

            <img className='w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='/'/>

        </div>

        <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>

        <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold text-white uppercase'>I am in {mood.currMood} mood</h1>
        </div>

        <div className='mt-7'>
          
          {
            mood.currMood === 'open' &&
            <div>
              <Row rowId='1' title='Up Coming' fetchUrl={requests.requestUpcoming}/>

              <Row rowId='2' title='Popular' fetchUrl={requests.requestPopular}/>

        
              <Row rowId='3' title='Trending' fetchUrl={requests.requestTrending}/>

              <Row rowId='4' title='Top Rated' fetchUrl={requests.requestTopRated}/>

              <Row rowId='5' title='Comedy' fetchUrl={requests.requestComedy}/>

              <Row rowId='6' title='Action' fetchUrl={requests.requestAction}/>

              <Row rowId='7' title='Romance' fetchUrl={requests.requestRomance}/>

              <Row rowId='8' title='Horror' fetchUrl={requests.requestHorror}/>

              <Row rowId='9' title='Documentaries' fetchUrl={requests.requestDocumentaries}/>
            </div>
          }

          {
            mood.currMood === 'comfortable' && 
            <div>
              <Row rowId='6' title='Action' fetchUrl={requests.requestAction}/>

              <Row rowId='2' title='Popular' fetchUrl={requests.requestPopular}/>

            </div>
          }

          {
            mood.currMood === 'happy' && 
            <Row rowId='7' title='Romance' fetchUrl={requests.requestRomance}/>
          }

          {
            mood.currMood === 'stressed' && 
            <div>
              <Row rowId='5' title='Comedy' fetchUrl={requests.requestComedy}/>

              <Row rowId='9' title='Documentaries' fetchUrl={requests.requestDocumentaries}/>
            </div>
          }

          {
            mood.currMood === 'sad' && 
            <Row rowId='5' title='Comedy' fetchUrl={requests.requestComedy}/>
          }
        </div>


    </div>
  )
}

export default Account