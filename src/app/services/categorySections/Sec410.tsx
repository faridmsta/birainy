import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Ümumi like/comment/follower/post/impressions/reached",
        "Klik və yeni izləyicilərin sayı",
        "Şərh və bəyənmələrin tarix üzrə analizi",
        "Fəaliyyətlərin faiz bölgüsü və s.",
    ],
};


const Sec410 = () => {
    return (
        <section className='flex flex-col gap-6 pb-20'>
            <div className="serviceSectionTitle"
            >Sosial Media</div>
            <p className="serviceSectionParagraf">BIRainy tərəfindən Sosial Media üzrə vizuallaşdırılmış dashboard idarə olunan platformalarda performans göstəricilərinin hərtərəfli təhlilini təqdim edir. Təhlildə diqqət real vaxt çərçivəsində auditoriya ilə qarşılıqlı əlaqə, məzmunun effektivliyi və platformanın ümumi inkişafı ilə bağlı fikirləri təqdim edən əsas göstəricilərə yönəlib.</p>
            <div className="">
                <p className="serviceSectionParagraf">Təhlilin komponetləri bunlardır:</p>
                <ul>
                    {lists["frs"].map((item, index) => (
                        <li
                            className='font-grotesk text-[rgba(0,0,0,.72)] relative pl-6 after:absolute after:left-[6px] after:top-1/2 after:-translate-y-0.5 after:w-[6px] after:h-[6px] after:bg-[rgba(0,0,0,.72)] after:rounded-full'
                            key={item + index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="btns flex flex-col md:flex-row items-start gap-4 ">
                <ContactUsBtn />
                <OurWorksBtn />

            </div>
            <div className="image relative ">
                <Image
                    src={data}
                    alt='Software image'
                    className='w-full h-full object-cover rounded-[12px]'
                />
            </div>
        </section>
    )
}

export default Sec410