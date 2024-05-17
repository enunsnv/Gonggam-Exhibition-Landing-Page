'use client'
import Link from 'next/link';
import Image from 'next/image';
import chap3Img from '../public/img/chap3img.png';

const Chap3 = () => {
  return (
    <div>
      <Image src={chap3Img} alt="image" layout="responsive"/>
      <div className='bg-[#191f23] text-[#c6d2d5] font-custom text-center text-xl py-[50px] leading-10'>
      이 작품은 거울을 활용하여 여러분들이 미디어아트전시를 배로 느낄 수 있게끔 만들어진 작품입니다. <br/>
      평온한 일상부터 마치 사고 현장 안에 속해 있는 것 같은 생생함을 느끼실 수 있습니다.
      </div>
    </div>
  );
};

export default Chap3;
