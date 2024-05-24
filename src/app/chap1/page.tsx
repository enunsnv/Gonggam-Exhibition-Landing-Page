import Image from 'next/image';
import chap1Img from '../public/img/chap1img.png';

const Chap1 = () => {
  return (
    <div className='bg-[#191f23] h-screen'>
      <Image src={chap1Img} alt="image" layout="responsive"  style={{ maxWidth: '100%', height: 'auto' }}/>
      <div className='text-[#c6d2d5] font-custom text-center p-[50px] text-sm'>

        <div className="text-xl mb-7 p-[50px]"> 공감의 첫번째, </div>
        전시 입구부터 사고 현장과 여러분들이 전시장에서 맞이하게 될 경험을 보여주는 다섯 가지의 사진을 보여드립니다. <br/> <br/>
        사고 현장을 담은 그림, 공감의 첫 번째부터 공감의 마지막까지 3인칭으로 여러분들에게 소개합니다.
   
      </div>
    </div>
  );
};

export default Chap1;
