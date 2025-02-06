import {forwardRef} from "react";
import {motion} from "motion/react";
import TextAnimated from "@/app/components/text/animated";

const SectionOffer = forwardRef((props, ref) => {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-6 gap-8 mt-24 lg:mt-0" id="tilby" ref={ref}>
                <div className="col-span-6">
                    <div className="overflow-hidden mb-4">
                        <TextAnimated tag={'h2'} className="text-4xl font-bold text-center md:mt-0 mt-16">
                            Tjenester
                        </TextAnimated>
                    </div>

                    <div className="overflow-hidden mb-12">
                        <TextAnimated className="text-center uppercase tracking-widest font-semibold">
                            Sjekk ut hva jeg gjør
                        </TextAnimated>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-12 lg:col-span-5">
                    <div className="md:w-1/4 flex items-center">
                        <img src={'/images/zdięcie 1.png'} alt="HTNBygg" className="w-64 md:mt-8 mx-auto"/>
                    </div>

                    <div className="md:w-3/4 flex flex-col justify-center">
                        <div className="overflow-hidden">
                            <TextAnimated tag={'h2'} className="text-2xl font-bold mt-8">
                                Nybygg og påbygg
                            </TextAnimated>
                        </div>

                        <div className="overflow-hidden">
                            <TextAnimated className="mt-8">
                                Drømmer du om et nytt hus eller ønsker du å utvide boarealet ditt?
                                HTNBYGG.as
                                realiserer dine drømmer! Vi bygger hus fra grunnen av, og vi utfører
                                også
                                profesjonelle tilbygg.
                                Vi garanterer solid håndverk, punktlighet og høy kvalitet.
                            </TextAnimated>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-6 gap-8 mb-24 mt-12">
                <div className="flex flex-col gap-8 md:col-start-2 col-span-5">
                    <div className="flex md:flex-row flex-col gap-12">
                        <div className="md:w-1/4 flex items-center md:order-2 lg:order-1">
                            <img src={'/images/zdięcie 2.png'} alt="HTNBygg" className="w-64 mt-8 mx-auto"/>
                        </div>

                        <div className="md:w-3/4 order-1 lg:order-2">
                            <div className="overflow-hidden">
                                <TextAnimated tag={'h2'} className="text-2xl font-bold mt-8">
                                    Rehabilitering - Oppussing – Renovering
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8">
                                    Gi nytt liv til ditt gamle hus og spar penger på strømregningen! Vi
                                    hjelper deg med å gjøre huset vakkert, funksjonelt og energieffektivt.
                                    Nye vinduer og etterisolering
                                    av fasaden kan redusere energiforbruket betraktelig, slik at du sparer
                                    penger i fremtiden. Vi tilbyr alt innen rehabilitering, oppussing og
                                    renovering, tilpasset dine behov og ditt budsjett.
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8">
                                    Trenger du hjelp med hele renoveringsprosessen? Vi kan bistå med alt fra planlegging
                                    til ferdigstillelse. Vi samarbeider blant annet med Byggtorget for å sikre tilgang
                                    til de nyeste materialene og teknologiene.
                                </TextAnimated>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 mt-28">
                <div className="flex flex-col gap-8">
                    <div className="flex md:flex-row flex-col gap-12">
                        <div className="md:w-1/4 flex items-center">
                            <img src={'/images/zdięcie 3.png'} alt="HTNBygg" className="w-64 mt-8 mx-auto"/>
                        </div>

                        <div className="md:w-3/4">
                            <div className="overflow-hidden">
                                <TextAnimated className="text-2xl font-bold mt-8" tag={'h2'}>
                                    Utendørs prosjekter
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8" leftRight>
                                    Ønsker du å forvandle uteområdet ditt til en oase av velvære? Vi
                                    hjelper deg med å skape drømmehagen din! Enten du drømmer om en solrik terrasse med
                                    pergola, et stilig gjerde rundt eiendommen, en praktisk carport til bilen eller en
                                    romslig garasje med bod, kan vi hjelpe deg med å realisere dine ønsker.
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8" leftRight>
                                    Ønsker du å bygge en koselig hytte på fjellet eller ved sjøen? Vi tar oss av alt fra
                                    planlegging og design til bygging og ferdigstillelse.
                                    Vi tilbyr et bredt spekter av tjenester innen utendørs prosjekter,
                                    fra fundamentering og konstruksjon til taktekking og fasadearbeid. Vi
                                    bruker kun materialer av høy kvalitet og garanterer solid håndverk
                                    og lang levetid.
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8" leftRight>
                                    Ta gjerne en titt på TikTok-kontoen vår! Der kan du se eksempler på
                                    tidligere prosjekter og få et innblikk i vårt arbeid. Vi er stolte av vårt
                                    håndverk og håper det inspirerer deg til å kontakte oss for ditt neste prosjekt!
                                </TextAnimated>
                            </div>

                            <div className="overflow-hidden">
                                <TextAnimated className="mt-8" leftRight>
                                    Vi tilbyr gratis befaring og uforpliktende pristilbud. Ta kontakt i
                                    dag for en hyggelig prat om ditt prosjekt!
                                </TextAnimated>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
})

export default SectionOffer;