import {motion} from "motion/react";
import {forwardRef} from "react";
import TextAnimated from "@/app/components/text/animated";
import Button from "@/app/components/button";


const SectionAboutUs = forwardRef((props, ref) => {
    return (
        <div className="max-w-screen-lg mx-auto min-h-screen mt-12 md:mt-32" id="om-oss" ref={ref}>
            <div className="overflow-hidden">
                <TextAnimated tag={'h1'} className="text-5xl font-bold text-center" delay={2.0}>
                    HTNBygg AS
                </TextAnimated>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 md:mt-0 mt-16">
                <div className="lg:w-1/4 flex justify-center flex-col">
                    <img src={'/images/Moje zdięcie.png'} alt="HTNBygg"
                         className="w-48 md:w-64 md:mt-24 mx-auto"/>

                    <div className="mt-8 flex flex-col items-center">
                        <h4 className="text-2xl font-bold mb-6">Kontakt</h4>

                        <a href="mailto:post@htnbygg.no" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/>
                            </svg>

                            <span>
                                post@htnbygg.no
                            </span>
                        </a>

                        <a href="tel:+4790000000" className="flex items-center gap-2 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"/>
                            </svg>

                            <span>
                                +47 123 12 123
                            </span>
                        </a>
                    </div>
                </div>

                <div className="lg:w-3/4 md:mt-16 lg:pl-24">
                    <div className="overflow-hidden">
                        <TextAnimated tag={'h2'} className="text-4xl font-bold mt-16 lg:mt-8 text-center lg:text-left">
                            Om oss
                        </TextAnimated>
                    </div>

                    <div className="overflow-hidden">
                        <TextAnimated className={'mt-8'}>
                            HTNBYGG.as er et byggefirma med base i&nbsp;Giske kommune, som betjener kunder
                            i&nbsp;hele Møre og Romsdal. Vi spesialiserer oss på bygging av
                            eneboliger,
                            renovering og rehabilitering av hus, omfattende modernisering, samt utendørs
                            arbeid - taktekking, terrasser, garasjer, gjerder og mye mer.
                        </TextAnimated>
                    </div>

                    <div className="overflow-hidden">
                        <TextAnimated className="mt-8">
                            Jeg heter Sławomir Fujarski og er grunnlegger av HTNBYGG.as. Jeg har jobbet
                            som tømrer i&nbsp;20 år. Før jeg slo meg ned i&nbsp;Norge for 14 år siden, jobbet jeg
                            i&nbsp;ulike land i&nbsp;Europa, som Polen, Storbritannia og Nederland. Jeg har
                            erfaring fra forskjellige stillinger, fra vanlig tømrer til <strong>formann med ansvar for
                            egne
                            prosjekter og team</strong>. I 2024 gikk firmaen jeg jobbet for konkurs, noe som inspirerte
                            meg til
                            å starte mitt eget firma.
                        </TextAnimated>
                    </div>

                    <div className="overflow-hidden">
                        <TextAnimated className="mt-8">
                            Jeg har fagbrev som tømrer (fullført i&nbsp;2003) og holder for <strong>tiden på med en
                            bachelorgrad i&nbsp;byggteknikk med spesialisering
                            i&nbsp;konstruksjoner</strong>. Jeg er klar for alle utfordringer du
                            måtte ha.
                            Jeg&nbsp;liker ukonvensjonelle løsninger og streber alltid etter å finne den beste
                            løsningen for mine kunder. Hvis du leter etter en solid og erfaren tømrer
                            med en kreativ touch, har du kommet til rett sted!
                        </TextAnimated>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Button href="https://www.tiktok.com/@htnbygg" target="_blank" className="mt-16">
                    Se prosjekter på TikTok
                </Button>
            </div>
        </div>
    )
})

export default SectionAboutUs