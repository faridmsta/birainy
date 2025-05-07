import ContactUsBtn from '@/components/ContactUsBtn'
import OurWorksBtn from '@/components/OurWorksBtn'
import React from 'react'

const Sec12 = () => {
    return (
        <section className='flex flex-col gap-6 '>
            <div className="serviceSectionTitle"
            >Sürətli Axtarış Sistemi</div>
            <p className="serviceSectionParagraf">Şirkətdaxili və xarici proseslərin həyata keçirilməsi, həmçinin əməkdaşların şirkət daxilindəki sənədləri avtomatlaşdırılmış şəkildə axtarış edib, rahatlıqla yerləşdirib, toplaya və göndərə bildikləri OCR alqoritmi ilə hazırlanmış Sürətli Axtarış Sistemi.</p>
            <div className="btns flex flex-col md:flex-row items-start gap-4">
                <ContactUsBtn />
                <OurWorksBtn />
            </div>
            <iframe className='w-full' width="560" height="315" src="https://www.youtube.com/embed/YRTe_sJd_2A?si=DDufqFWp-Vjp6wrJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>
    )
}

export default Sec12