"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div style={{ 
      background: 'white',
      position: 'relative',
    }}>
      {/* 回転するテキスト */}
      <div style={{
        position: 'absolute',
        left: '120px',
        top: '80%',
        transform: 'translateY(-50%)',
        zIndex: 20,
        pointerEvents: 'none'
      }}>
        <div
          className="rotating-text"
          style={{
            width: '130px',
            height: '130px',
            position: 'relative'
          }}
        >
          <style jsx>{`
            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .rotating-text {
              animation: rotate 20s linear infinite;
            }
            .character {
              position: absolute;
              width: 100%;
              height: 100%;
              text-align: center;
              transform-origin: center;
              font-weight: 900;
              font-size: 1.8rem;
              font-family: 'Helvetica Neue', sans-serif;
              color: rgba(255, 255, 255, 1); /* 完全に不透明な白 */
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6); /* より濃く広いシャドウ */
              text-transform: uppercase;
              letter-spacing: 0.05em;
              -webkit-font-smoothing: antialiased;
            }
          `}</style>
          {
            "YUYA TAKAHASHI ".split("").map((char, i) => {
              const deg = i * (360 / "YUYA TAKAHASHI ".length);
              return (
                <div
                  key={i}
                  className="character"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-52px)`
                  }}
                >
                  {char}
                </div>
              );
            })
          }
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        padding: '1.5rem 0 1rem', 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 10,
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ 
          display: 'flex',
          maxWidth: '1200px',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 2rem',
          marginLeft: '1rem'
        }}>
          <div style={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#000000',
            marginRight: 'auto',
            marginLeft: '0',
            paddingLeft: '0'
          }}>
            髙橋邑弥 / Yuya Takahashi
          </div>
          <ul style={{ 
            display: 'flex', 
            gap: '2.5rem', 
            listStyle: 'none',
            margin: 0,
            paddingLeft: '6em'
          }}>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="#about" 
                style={{ 
                  color: '#333', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#333';
                }}
              >
                About
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#0070f3',
                  transition: 'width 0.3s ease'
                }}
                className="hover-line"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%';
                }}
                />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#skills" 
                style={{ 
                  color: '#333', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#333';
                }}
              >
                Skills
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#0070f3',
                  transition: 'width 0.3s ease'
                }}
                className="hover-line"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%';
                }}
                />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contact" 
                style={{ 
                  color: '#333', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0070f3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#333';
                }}
              >
                Contact
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  backgroundColor: '#0070f3',
                  transition: 'width 0.3s ease'
                }}
                className="hover-line"
                onMouseEnter={(e) => {
                  e.currentTarget.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = '0%';
                }}
                />
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div style={{ 
        height: '100vh',
        width: '100%',
        position: 'relative',
        paddingTop: '60px'
      }}>
        {/* Full screen hero image */}
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', 
          height: '100%',
          zIndex: 1,
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}>
            <Image
              src="/hero-converted.jpg" 
              alt="Hero Image"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
          </div>
        </div>
        
        {/* Text overlay in bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '5rem',
            zIndex: 10,
            textAlign: 'right',
            color: 'white',
            textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)'
          }}
        >
          <div style={{ 
            marginBottom: '1.3rem'
          }}>
            <p style={{ 
              margin: '0 0 0.5rem 0',
              fontSize: '2.5rem', 
              fontWeight: '700',
              lineHeight: '1.1',
            }}>"自分らしく"生きる学生と</p>
            <p style={{ 
              margin: 0,
              fontSize: '2.5rem', 
              fontWeight: '700',
              lineHeight: '1.1',
            }}>地方から日本を盛り上げる</p>
          </div>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            letterSpacing: '0.05em',
            margin: 0,
            lineHeight: '1.1',
            marginBottom: '0.75rem'
          }}>
            髙橋邑弥
          </h1>
          <p style={{
            fontSize: '2rem',
            fontWeight: '500',
            letterSpacing: '0.05em',
            margin: 0,
            lineHeight: '1.1'
          }}>
            Yuya Takahashi
          </p>
        </motion.div>
      </div>
    </div>
  );
} 