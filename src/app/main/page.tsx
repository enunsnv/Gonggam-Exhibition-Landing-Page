import Link from 'next/link';
import Image from 'next/image';
import mainImage from '../main/mainimg.png';
import LocImage from '../main/locationimg.png';

const Home = () => {
  return (
    <div>
      <Image src={mainImage} layout="responsive"/>
     
      <div className='bg-[#191f23] text-[#c6d2d5] font-custom text-center text-xl'>

        <div className='py-[50px] w-[90%] pl-[90px]'>
         미디어아트 '후쿠시마를 만나다 : 공감' 전시는 누구나 무료로 관람하실 수 있으며, <br/> 2024년 6월 1일 하루동안 언더독 뮤지엄에서 진행됩니다. <br/>  <br/>
         한국에서 후쿠시마의 사고를 재조명하여 현재까지도 고통을 겪고 있는<br/> 
         이들을 향한 <b>위로의 메세지를 전달</b>하기 위해 구성된 미디어아트 전시입니다. 
         <br/><br/>

        이 전시는 ‘스토리몰입형’ 미디어아트를 제작하여 관람객 여러분들에게 소중한 추억과 인류 간 공감을 선사할 수 있는 특별한 예술 공간을 창조합니다. 
        빛과 소리, 공감각적인 경험을 통해 저희의 이야기를 풀어나갑니다.
        
        </div>
        <Image src={LocImage} className="pr-0" layout="responsive" ></Image>
        <div className="max-w-5xl mx-auto p-5">
          <Link href="/chap1" passHref>
          <div className="block p-5 pr-[500px] my-[80px] cursor-pointer hover:animate-pulse">
            <p className="">공감의 첫번째,</p>
            <p className='text-4xl py-5'>너도, 나도, 우리도</p>
          </div>

          </Link>
          <Link href="/chap2" passHref>
            <div className="block p-5 pl-[500px] my-[80px] ml-cursor-pointer hover:animate-pulse">
              <p>공감의 두번째,</p>
              <p className='text-4xl py-5'>기억의 순간</p>
            </div>
          </Link>
          <Link href="/chap3" passHref>
            <div className="block p-5 pr-[500px] my-[80px] cursor-pointer hover:animate-pulse">
              <p>공감의 세번째,</p>
              <p className='text-4xl py-5'>마주하다</p>
            </div>
          </Link>
          <Link href="/chap4" passHref>
            <div className="block p-5 pl-[500px] my-[80px] cursor-pointer hover:animate-pulse">
              <p>공감의 네번째,</p>
              <p className='text-4xl py-5'>소리로 그리다</p>
            </div>
          </Link>
          <Link href="/chap5" passHref>
            <div className="block p-5 pr-[500px] my-[80px] cursor-pointer hover:animate-pulse">
              <p>공감의 결말,</p>
              <p className='text-4xl py-5'>공감을 전하다</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
