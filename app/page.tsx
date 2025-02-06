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
    const year = new Date().getFullYear();

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
            className="font-[family-name:var(--font-geist-sans)]">
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
            </main>

            <footer className="flex flex-col gap-8 items-center container mx-auto my-8">
                <Socialmedia/>

                <p className="text-center text-gray-500">
                    Blogg
                </p>

                <p className="text-center text-sm text-gray-500">
                    <span>
                        © {year}. Alle rettigheter forbeholdt.
                    </span>
                    <a href="https://www.github.com/lukasion" target={"_blank"} className={'ml-2'}>
                        Author
                    </a>
                </p>
            </footer>
        </div>
    );
}


