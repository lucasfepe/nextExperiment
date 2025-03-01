'use client'

import React, { useEffect, useRef } from 'react'
import { fadeUpAnimation } from "@/shared/animations"

// Note: this used to be a custom hook
// but it was refactored into a component

// Adds fade-up animation based on scroll state to children elemnts
export const ScrollAnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollState = {
            isScrolling: false,
            timeout: null as NodeJS.Timeout | null
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = scrollState.isScrolling ? 200 : 0
                    fadeUpAnimation(entry.target as HTMLElement, delay)
                }
            })
        }, { threshold: 0.1 })

        const handleScroll = () => {
            scrollState.isScrolling = true
            if (scrollState.timeout) {
                clearTimeout(scrollState.timeout)
            }
            scrollState.timeout = setTimeout(() => {
                scrollState.isScrolling = false
            }, 150)
        }

        // Observe all child elements instead of just the wrapper
        if (wrapperRef.current) {
            const childElements = wrapperRef.current.children
            Array.from(childElements).forEach(child => {
                observer.observe(child)
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
            if (scrollState.timeout) {
                clearTimeout(scrollState.timeout)
            }
        }
    }, [])

    return (
        <div ref={wrapperRef}>
            {children}
        </div>
    )
}
