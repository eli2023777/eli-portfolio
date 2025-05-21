import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Tests = () => {
    const containerRef = useRef(null);
    const { scrollY } = useViewportScroll();

    // עדכון scrollTop כאשר scrollY משתנה
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [scrollY]);

    return (
        <motion.div
            ref={containerRef}
            style={{ overflowY: 'scroll', height: '500px' }}
        >
            <div style={{ position: 'absolute', width: '1000px', height: '100px', color: 'crimson' }}>
                bla
            </div>
        </motion.div>
    );
};

export default Tests;
