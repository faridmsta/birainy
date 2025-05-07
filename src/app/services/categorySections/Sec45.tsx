import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import Image from 'next/image'
import data from '@/assets/img/data.webp'

const lists = {
    frs: [
        "Tədarükçü seçimi",
        "Müqavilə danışıqları",
        "İnventarın idarə edilməsi",
    ],

}

const Sec45 = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className="serviceSectionTitle"
            >Satınalma təhlili</div>
            <div className="">
                <p className="serviceSectionParagraf">Satınalma təhlili şirkətin satınalma fəaliyyəti haqqında məlumat əldə etmək və xərclərə qənaət, prosesi təkmilləşdirmək imkanlarını aşkar etmək üçün onun satınalma fəaliyyətini nəzərdən keçirməkdir. Bunun üçün tendensiyaları, potensial riskləri və təkmilləşdirmə tələb edən sahələri müəyyən edilib satınalma sifarişləri, təchizatçı performansı və inventar səviyyələri kimi müxtəlif məlumatlar təhlil edilir. Satınalma təhlili şirkətlərə aşağıdakı mövzularda əsaslandırılmış qərarlar qəbul etməkdə kömək edir, bu da daha yüksək səmərəliliyə və gəlirliliyə gətirib çıxarır:</p>
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

export default Sec45