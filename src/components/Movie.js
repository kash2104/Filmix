import React, { useEffect, useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import axios from 'axios'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const Movie = ({item, rowID}) => {
    const [like, setLike] = useState(false);
    
    const truncateString = (str, num) => {
      if(str?.length > num){
          return str.substr(0,num) + '...'
      }
      else{
          return str;
      }
    }

  return (
    <div className='w-[160px] sm:w-[200px] md:[w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>

        <img className='w-full h-auto block text-white text-center' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={truncateString(item?.title, 15)}/>

        <div className='absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{truncateString(item?.title, 25)}</p>

            <p>
                {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
            </p>

        </div>

    </div>
  )
}

export default Movie