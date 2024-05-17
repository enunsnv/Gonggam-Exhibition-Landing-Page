'use client'
import Link from 'next/link';
import Image from 'next/image';
import chap4Img from '../public/img/chap4img.png';

const Chap4 = () => {
  return (
    <div>
      <Image src={chap4Img} alt="image" layout="responsive"/>
      <div className='bg-[#191f23] text-[#c6d2d5] font-custom text-center text-xl py-[50px] leading-10'>
      헤드셋과 세 가지 현장 소리의 표현이 담긴 CD를 배치해 두었습니다. <br/>
      다양한 소리를 통해 듣는 소리에 따라 다양한 공감과 감상을 직접 그려낼 수 있도록 하였습니다.
      </div>
    </div>
  );
};

export default Chap4;
