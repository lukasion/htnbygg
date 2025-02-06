import {motion} from "motion/react";
import {forwardRef} from "react";


const SectionAboutUs = forwardRef((props, ref) => {
    return (
        <div className="max-w-screen-lg mx-auto min-h-screen" id="om-oss" ref={ref}>
            <div className="overflow-hidden mt-12">
                <motion.div
                    initial={{
                        translateY: 100,
                    }}
                    animate={{
                        translateY: [100, 0],
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 2
                    }}
                    className="text-5xl font-bold text-center"
                >
                    HTNBygg AS
                </motion.div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 md:gap-16">
                <div className="md:w-1/4 flex items-start mt-12 md:mt-24">
                    <img src={'/images/Moje zdięcie.png'} alt="HTNBygg"
                         className="w-48 md:w-64 md:mt-24 mx-auto"/>
                </div>

                <div className="overflow-hidden md:w-3/4 md:mt-24">
                    <motion.div
                        initial={{
                            opacity: 0,
                            translateX: '-100%',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 2.5
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        viewport={{once: true}}
                    >
                        <h2 className="text-2xl font-bold mt-8">
                            Om oss
                        </h2>

                        <motion.p
                            className="mt-8"
                            initial={{translateX: '-100%'}}
                            transition={{duration: 0.3}}
                            whileInView={{translateX: 0}}
                            viewport={{once: true}}
                        >
                            HTNBYGG.as er et byggefirma med base i Giske kommune, som betjener kunder i
                            hele Møre og Romsdal. Vi spesialiserer oss på bygging av eneboliger,
                            renovering og rehabilitering av hus, omfattende modernisering, samt utendørs
                            arbeid - taktekking, terrasser, garasjer, gjerder og mye mer.
                        </motion.p>

                        <motion.p
                            className="mt-8"
                            initial={{translateX: '-100%'}}
                            transition={{duration: 0.3, delay: 0.3}}
                            whileInView={{translateX: 0}}
                            viewport={{once: true}}
                        >
                            Jeg heter Sławomir Fujarski og er grunnlegger av HTNBYGG.as. Jeg har jobbet
                            som tømrer i 20 år. Før jeg slo meg ned i Norge for 14 år siden, jobbet jeg
                            i ulike land i Europa, som Polen, Storbritannia og Nederland. Jeg har
                            erfaring fra forskjellige
                            stillinger, fra vanlig tømrer til formann med ansvar for egne prosjekter og
                            team. I 2024 gikk firmaen jeg jobbet for konkurs, noe som inspirerte meg til
                            å starte mitt eget firma.
                        </motion.p>
                        <motion.p
                            className="mt-8"
                            initial={{translateX: '-100%'}}
                            transition={{duration: 0.3, delay: 0.6}}
                            whileInView={{translateX: 0}}
                            viewport={{once: true}}
                        >
                            Jeg har fagbrev som tømrer (fullført i 2003) og
                            holder for tiden på med en bachelorgrad i byggteknikk med spesialisering i
                            konstruksjoner. Jeg er klar for alle utfordringer du måtte ha.
                            Jeg&nbsp;liker
                            ukonvensjonelle løsninger og streber alltid etter å finne den beste
                            løsningen for mine kunder. Hvis du leter etter en solid og erfaren tømrer
                            med en kreativ touch, har du kommet til rett sted!
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
})

export default SectionAboutUs