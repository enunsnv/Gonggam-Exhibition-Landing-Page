'use client'
import Link from 'next/link';
import Image from 'next/image';
import mainImage from './mainimg.png';
import LocImage from './locationimg.png';

const Home = () => {
  return (
    <div className="overflow-auto">
      <Image src={mainImage} alt="image" style={{ maxWidth: '100%', height: 'auto' }}/>
     
      <div className='bg-[#191f23] text-[#c6d2d5] text-center font-custom text-sm'>

        <div className='p-[50px]'>
          <div className="text-xl mb-7"> 전시 안내 </div>

         미디어아트 '후쿠시마를 만나다 : 공감' 전시는 누구나 무료로 관람하실 수 있으며, 2024년 6월 1일 12:00-18:00 언더독 뮤지엄에서 진행됩니다. <br/>  <br/>
         한국에서 후쿠시마의 사고를 재조명하여 현재까지도 고통을 겪고 있는 이들을 향한 <b>위로의 메세지를 전달</b>하기 위해 구성된 미디어아트 전시입니다. 
         <br/><br/>

         <div className="text-xl my-7"> 관람 안내 </div>

        이 전시는 ‘스토리몰입형’ 미디어아트를 제작하여 관람객 여러분들에게 소중한 추억과 인류 간 공감을 선사할 수 있는 특별한 예술 공간을 창조합니다. 
        빛과 소리, 공감각적인 경험을 통해 저희의 이야기를 풀어나갑니다.  <br/> <br/> 

        2011년 3월 11일에 발생한 일본의 대지진과 쓰나미로 인해 후쿠시마 제1원전에서 원자로 냉각장치가 작동 중지되어 원전으로부터 방출된 방사능이 지역에 큰 피해를 끼쳤습니다. <br/><br/>

        후쿠시마 원전사고는 역사상 가장 심각한 사고레벨인 7단계를 기록하고 있으며, 이는 체르노빌 원전사고와 동일한 사고레벨이자 가장 심각한 사고임을 나타내는 수치입니다. <br/><br/>

        방사능 유출과 쓰나미로 인해 삶의 터전을 잃은 수많은 주민들은 사고의 기억에서 벗어나지 못한 채 여전히 고통받고 있습니다. <br/> <br/>

        저희는 이러한 전시를 통해 ‘인류애’를 전시라는 폼을 통해 여러분께 경험으로 전달해드리고자 합니다. <br/> <br/>

        이러한 한국에서의 전시를 기반으로 추후 일본에서의 전시를 기획 중에 있으며, 관람객 여러분도 마지막 작품에 참여해 관람자로만 국한되지 않고 소통할 수 있습니다. <br/>


        <div className="text-xl my-7"> 관람 순서 안내 </div>
        아래 자세히 알고자 하는 섹션의 글자를 누르면 구체적인 정보를 확인하실 수 있습니다.
        </div>
        <div className="p-5">
          <Link href="/chap1" passHref>
          <div className="block p-5 pr-[400px] my-[30px] cursor-pointer nanum-myeongjo-regular hover:animate-pulse">
            <p className="">공감의 첫번째,</p>
            <p className='text-3xl py-5'>너도, &nbsp; 나도, &nbsp; 우리도</p>
          </div>

          </Link>
          <Link href="/chap2" passHref>
            <div className="block p-5 ml-[330px] my-[30px] ml-cursor-pointer nanum-myeongjo-regular hover:animate-pulse">
              <p>공감의 두번째,</p>
              <p className='text-3xl py-5'>기억의 &nbsp; 순간</p>
            </div>
          </Link>
          <Link href="/chap3" passHref>
            <div className="block p-5 pr-[400px] my-[30px] cursor-pointer nanum-myeongjo-regular hover:animate-pulse">
              <p>공감의 세번째,</p>
              <p className='text-3xl py-5'>마주하다</p>
            </div>
          </Link>
          <Link href="/chap4" passHref>
            <div className="block p-5 ml-[330px] my-[30px] cursor-pointer nanum-myeongjo-regular hover:animate-pulse">
              <p>공감의 네번째,</p>
              <p className='text-3xl py-5'>소리로 &nbsp; 그리다</p>
            </div>
          </Link>
          <Link href="/chap5" passHref>
            <div className="block p-5 pr-[400px] my-[30px] cursor-pointer nanum-myeongjo-regular hover:animate-pulse">
              <p>공감의 결말,</p>
              <p className='text-3xl py-5'>공감을 전하다</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
