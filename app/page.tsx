'use client';

import Preloader from "@/app/components/preloader";
import Socialmedia from "@/app/components/socialmedia";
import Menu from "@/app/components/menu";
import FloatingArrow from "@/app/components/floating-arrow";
import SectionAboutus from "@/app/components/section/about-us";
import SectionOffer from "@/app/components/section/offer";
import {useEffect, useRef, useState} from "react";
import {animate} from "motion";

export default function Home() {
    const loadingWrapper = useRef(null);
    const tilby = useRef<HTMLDivElement>(null);
    const omOss = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const animateLoader = () => {
            if (loadingWrapper.current) {
                animate(loadingWrapper.current, {opacity: [1]}, {duration: 0.3});

                setTimeout(() => {
                    animate(loadingWrapper.current, {opacity: [1, 0]}, {duration: 0.3});
                    setTimeout(() => {
                        setLoading(false);
                    }, 300);
                }, 2000);
            }
        }

        animateLoader()
    }, []);

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center container mx-auto">
                {loading && (
                    <div
                        ref={loadingWrapper}
                        className="flex flex-col gap-2 items-center fixed top-0 left-0 w-full h-full z-50 justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-md"
                        style={{
                            opacity: 1
                        }}
                    >
                        <Preloader/>
                    </div>
                )}

                <Menu tilby={tilby}/>

                <FloatingArrow/>

                <div className="md:mt-0 mt-16">
                    <div className="mx-auto px-3 md:px-0">
                        <SectionAboutus ref={omOss}/>

                        <SectionOffer ref={tilby}/>
                    </div>
                </div>

                <Socialmedia/>
            </main>
        </div>
    );
}


