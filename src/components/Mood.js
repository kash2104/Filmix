import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Mood = () => {
    const [mood, setMood] = useState('');
    const navigate = useNavigate();

        
    const clickHandler = (mood) =>{
        setMood(mood);

        const dataToSend = {currMood: mood};

        navigate('/account', {state:{data:dataToSend}});
    }
    // console.log(mood);

  return (
    <div className='mt-[30px] pt-[30px] pb-[26px] grid gap-[25px] lg:grid-cols-[repeat(5,minmax(0,1fr))] md:grid-cols-2 sm:grid-cols-1 text-white pl-[40px] place-items-center justify-items-center'>

    
        <div className='rounded-md shadow-lg cursor-pointer overflow-hidden relative transition-all border hover:scale-75 flex justify-center items-center h-[200px] w-[200px]' 
        onClick={() => clickHandler('sad')}>

            <img className='object-stretch absolute h-full w-full'  src='https://th.bing.com/th/id/OIP.IpGF22bsoAoE8SgmNBjjaAHaFj?rs=1&pid=ImgDetMain'/>
            <p className='absolute bg-slate-700 w-full text-center font-semibold text-[20px]'>Sad</p>

        </div>

        <div className='rounded-md shadow-lg cursor-pointer overflow-hidden relative transition-transform border hover:scale-75 flex justify-center items-center h-[200px] w-[200px]' onClick={() => clickHandler('comfortable')}>

            <img className='object-stretch absolute h-full w-full'  src='https://thedoctrinelady.files.wordpress.com/2017/08/comfortable1.jpeg?w=1200'/>
            <p className='absolute bg-slate-700 w-full text-center font-semibold text-[20px]'>Relaxed</p>

        </div>

        <div className='rounded-md shadow-lg cursor-pointer overflow-hidden relative transition-transform border hover:scale-75 flex justify-center items-center h-[200px] w-[200px]' onClick={() => clickHandler('happy')}>

            <img className='object-stretch absolute w-full h-full'  src='https://th.bing.com/th/id/R.941c95a53d8b004f7060092aab5064cb?rik=jfRLZjo6R9USQQ&riu=http%3a%2f%2fmoonmagazine.org%2fwp-content%2fuploads%2f2013%2f03%2fThe-Happy-Movie-poster-741x1024.jpg&ehk=7kN1Lt5Ka8l%2bs2MiZYEeOFXowHKE2%2bKpRX71KPYw2S8%3d&risl=&pid=ImgRaw&r=0'/>
            <p className='absolute bg-slate-700 w-full text-center font-semibold text-[20px]'>Happy</p>

        </div>

        <div className='rounded-md shadow-lg cursor-pointer overflow-hidden relative transition-transform border hover:scale-75 flex justify-center items-center h-[200px] w-[200px]' onClick={() => clickHandler('stressed')}>
            
            <img className='object-stretch absolute h-full w-full'  src='https://www.wallpaperup.com/uploads/wallpapers/2015/09/18/806045/e09fb76d09a419ff78b185a2dd71743d.jpg'/>
            <p className='absolute bg-slate-700 w-full text-center font-semibold text-[20px]'>Stressed</p>

        </div>
        
    </div>
  )
}

export default Mood