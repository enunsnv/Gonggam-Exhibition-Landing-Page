import Link from 'next/link';
import Image from 'next/image';
import chap5Img from '../chap5/chap5img.png';
const Chap5 = () => {
  return (
    <div>
      <Image src={chap5Img} alt="image" layout="responsive"/>
      <div className='bg-[#191f23] text-[#c6d2d5] font-custom text-center text-xl py-[50px]'>
      모든 전시를 감상하신 후 아픔 속에 살아가고 있는 분들께 공감의 메시지를 작성하여 관람의 주체에서 창작의 주체가 되어보는 경험을 선사합니다.<br/>
      모든 관람객분들의 공감 메시지 카드를 모아 새로운 작품을 탄생시킬 예정입니다. (이는 추후에 사이트에서 확인하실 수 있습니다.)
      </div>
    </div>
  );
};

export default Chap5;
