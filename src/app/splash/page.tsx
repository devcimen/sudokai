'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Splash() {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/')
        }, 2000)

        return () => clearTimeout(timeout)
    }, [router])

    return (
        <div className="flex items-center justify-center p-6 pt-16 pb-8 h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Image src="/logo.svg" width={344} height={172} alt="Sudokai Main Logo" />
            </motion.div>
        </div>
    )
}