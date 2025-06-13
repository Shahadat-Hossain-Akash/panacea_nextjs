'use client';
import {useEffect, useState} from 'react';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';

const ScrollButton = () => {
    const [showTop, setShowTop] = useState(false);
    const [showBottom, setShowBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.body.scrollHeight;

            const minTopThreshold = 300;
            const minBottomThreshold = 300;
            const nearBottom = windowHeight + scrollY >= docHeight - 300;

            setShowTop(scrollY > minTopThreshold);
            setShowBottom(scrollY > minBottomThreshold && !nearBottom);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    const scrollToBottom = () => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        key="top"
                        onClick={scrollToTop}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        className="p-3 rounded-full bg-black text-white shadow-md hover:bg-black/80 transition"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5"/>
                    </motion.button>
                )}
                {showBottom && (
                    <motion.button
                        key="bottom"
                        onClick={scrollToBottom}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        className="p-3 rounded-full bg-black text-white shadow-md hover:bg-black/80 transition"
                        aria-label="Scroll to bottom"
                    >
                        <ChevronDown className="w-5 h-5"/>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ScrollButton;
