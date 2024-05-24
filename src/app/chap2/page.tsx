import Image from 'next/image';
import useSWR from 'swr';
import chap2Img from '../public/img/chap2img.png';

const Chap2 = () => {
  return (
    <div className='bg-[#191f23] h-screen'>
      <Image src={chap2Img} alt="image" layout="responsive"  style={{ maxWidth: '100%', height: 'auto' }}/>
      <div className='text-[#c6d2d5] font-custom text-center p-[50px] text-sm'>

        <div className="text-xl mb-7 p-[50px]"> 공감의 두번째, </div>
        전시회장 3면 전체를 활용하여 후쿠시마 주민들의 아픈 기억의 순간을 표현한 미디어아트 작품입니다. <br/> <br/>
        평화로운 일상에서부터 전개되는 현장의 생생함을 느껴보세요.
        결말의 세차게 내리는 비와 벽을 타고 흘러내리는 빗줄기로 슬픔을 표현했으며, 
        사고 발생 시각인 14:46:00은 주민들이 아픔의 순간에 멈춰 그들이 여전히 고통받고 있다는 것을 표현하였습니다.

      </div>
    </div>
  );
};

export default Chap2;
