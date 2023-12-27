"use client"

import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

const Page = () => {
    const buttonRef = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false);
    const searchParams = useSearchParams();
    const [name, setName] = useState('');

    useEffect(() => {
        const search = searchParams.get('name');
        if (search) {
        
            setName(search);
        }
    }, [searchParams]);

    function moveButton() {

        buttonRef.current.style.position = "absolute";
        var x = Math.random() * (window.innerWidth - buttonRef.current.offsetWidth) - 85;
        var y = Math.random() * (window.innerHeight - buttonRef.current.offsetHeight) - 48;
        buttonRef.current.style.left = `${x}px`;
        buttonRef.current.style.top = `${y}px`;
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col bg-rose-200'>
            <p className='text-xl md:text-6xl text-pink-500 pl-2'>{`Will you go out with me ${name}?`}</p>
            <img src="https://media.giphy.com/media/ZCSPaG9pPpSJEBiOUF/giphy.gif" alt="Cute animated illustration" />

            <div className="flex flex-row gap-6">
                <Link href="/accepted">
                <Button className="px-6 py-6 bg-pink-600 text-xl cursor-pointer">
                    Yes
                </Button>
                </Link>
                <Button
                    className="px-6 py-6 bg-pink-600 text-xl cursor-pointer relative"
                    id="noButton"
                    ref={buttonRef}
                    onMouseOver={moveButton}
                >
                    No
                </Button>
            </div>
        </div>
    );
};

export default Page;
