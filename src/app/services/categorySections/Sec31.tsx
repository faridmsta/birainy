import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import React from 'react'
import gameService from '@/assets/img/game_service.webp'

const Sec31 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="serviceSectionTitle"
            >Proqram Təminatı</div>
            <p className="serviceSectionParagraf">Şirkətin fəaliyyət göstərdiyi istiqamətə, istehsal etdiyi məhsullara uyğun olaraq oyun ssenarisi hazırlanır, son trendlərə əsaslanaraq dizayn olunur və oyun developerləri tərəfindən 2D və 3D formatında oyunlar yazılır. Oyunun növünə uyğun assetlərdən istifadə edilir.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <div className="image relative ">
                <Image
                    src={gameService}
                    alt='Software image'
                    className='w-full h-full object-cover rounded-[12px]'
                />
            </div>
        </section>
    )
}

export default Sec31