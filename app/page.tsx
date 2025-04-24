"use client";

import React from 'react';
import { 
  FaGraduationCap,
  FaBullhorn, 
  FaUsers,
  FaCode, 
  FaDesktop, 
  FaMobileAlt, 
  FaGithub, 
  FaTwitter, 
  FaEnvelope 
} from 'react-icons/fa';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div style={{ 
      lineHeight: 2, 
      backgroundColor: 'white',
      color: '#333333',
      fontFamily: "'Noto Sans JP', 'Helvetica Neue', sans-serif" 
    }}>
      <style jsx global>{`
        .skill-card {
          background-color: white;
          border-radius: 0.75rem;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.03);
          cursor: pointer;
        }
        
        .skill-card:hover {
          background-color: #f0f0f0;
          transform: translateY(-15px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          color: #000;
          font-weight: 600;
        }

        .skill-card:hover p {
          color: #000;
          font-weight: 500;
        }
        
        .skill-card:hover svg {
          color: #000;
        }
        
        .skill-card:hover h3 {
          color: #000;
          font-weight: 700;
        }
      `}</style>
      
      <Hero />
      
      {/* About Section */}
      <section id="about" style={{ 
        padding: '8rem 0', 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '4rem', 
            color: '#000000', 
            textAlign: 'center',
            position: 'relative'
          }}>
            About Me
            <span style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '2px',
              backgroundColor: '#000000'
            }}></span>
          </h2>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            marginTop: '2rem' 
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem', 
                color: '#000000',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #eaeaea'
              }}>
                プロフィール
              </h3>
              
              {/* 現在の役職 - 特別強調 */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}>
                <p style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  color: '#000',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  所属：株式会社Vivixy 執行役員 JSD事業部長
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#4b5563'
                }}>
                  日本全国の学生が所属するプラットフォーム・JAPAN STUDENT DAOの責任者として、学生の可能性を解放し、日本をより良くしていくというミッションを担当。
                </p>
              </div>
              
              {/* ビジョン - 強調表示 */}
              <div style={{
                backgroundColor: '#f0f4f8',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '2.5rem',
                borderLeft: '4px solid #000'
              }}>
                <p style={{ 
                  marginBottom: '0.5rem',
                  fontSize: '1rem', 
                  fontWeight: '500',
                  color: '#666'
                }}>
                  ビジョン
                </p>
                <p style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  color: '#000000',
                  fontWeight: '600'
                }}>
                  少しでも多くの人の笑顔を創出する、"世界一のGiver"になる。
                </p>
              </div>
              
              {/* タイムライン */}
              <div style={{
                position: 'relative',
                margin: '2rem 0 3rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid #eaeaea'
              }}>
                {/* 2000年 */}
                <div style={{
                  position: 'relative',
                  marginBottom: '2rem',
                  paddingLeft: '1.5rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.65rem',
                    top: '0.5rem',
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}></div>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.75rem', 
                    color: '#000'
                  }}>
                    2000年
                  </h4>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: '#4b5563'
                  }}>
                    福島県で誕生。3.11の経験から経営者となることを志す。
                  </p>
                </div>
                
                {/* 大学1年次〜 */}
                <div style={{
                  position: 'relative',
                  marginBottom: '2rem',
                  paddingLeft: '1.5rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.65rem',
                    top: '0.5rem',
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}></div>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.75rem', 
                    color: '#000'
                  }}>
                    大学1年次〜
                  </h4>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: '#4b5563'
                  }}>
                    福島を中心に地方創生×人財育成を行うコミュニティの運営に携わる。
                  </p>
                </div>
                
                {/* 休学時 */}
                <div style={{
                  position: 'relative',
                  marginBottom: '2rem',
                  paddingLeft: '1.5rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.65rem',
                    top: '0.5rem',
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}></div>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.75rem', 
                    color: '#000'
                  }}>
                    休学時
                  </h4>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: '#4b5563'
                  }}>
                    大学3年終了時、大学を休学し、カナダへの一年の留学と現地でのアルバイトを通じ、多様な価値観や文化・一次情報に触れることの重要性を実感。
                  </p>
                </div>
                
                {/* 大学休学中 */}
                <div style={{
                  position: 'relative',
                  paddingLeft: '1.5rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-1.65rem',
                    top: '0.5rem',
                    width: '1rem',
                    height: '1rem',
                    backgroundColor: '#000',
                    borderRadius: '50%',
                    border: '2px solid white'
                  }}></div>
                  <h4 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.75rem', 
                    color: '#000'
                  }}>
                    世界一周
                  </h4>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    lineHeight: '1.8', 
                    color: '#4b5563'
                  }}>
                    さらに1年大学を休学し、世界の教育施設を回りながらインタビューを行う世界一周を通じて、教育について学ぶ。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" style={{ 
        backgroundColor: '#f9fafb', 
        padding: '8rem 0',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '4rem', 
            color: '#000000', 
            textAlign: 'center',
            position: 'relative'
          }}>
            Skills
            <span style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '2px',
              backgroundColor: '#000000'
            }}></span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem', 
            marginTop: '3rem' 
          }}>
            <div className="skill-card">
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaGraduationCap size={30} style={{ color: '#4b5563' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginLeft: '1rem', color: '#333333' }}>キャリア開発</h3>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                学生のキャリア形成に関するサポートとコンサルティングを提供。
                個々の強みや興味を活かした進路選択をサポートします。
              </p>
            </div>
            
            <div className="skill-card">
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaBullhorn size={30} style={{ color: '#4b5563' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginLeft: '1rem', color: '#333333' }}>イベント運営・PR</h3>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                効果的なイベント企画から実施、PRまでをワンストップで行います。
                目的に合わせた最適なアプローチで成果を最大化します。
              </p>
            </div>
            
            <div className="skill-card">
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                <FaUsers size={40} style={{ color: '#4b5563' }} />
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginLeft: '1rem', whiteSpace: 'nowrap', color: '#333333' }}>チームビルディング</h3>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563' }}>
                多様なバックグラウンドを持つメンバーの強みを活かし、
                最大限のパフォーマンスを発揮できるチームづくりを支援します。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" style={{ 
        padding: '8rem 0 14rem', /* 下部パディングを12remから14remに増やして、フッターとの間隔を広げる */
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative' /* 子要素の絶対位置指定の基準点 */
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '4rem', 
            color: '#000000', 
            textAlign: 'center',
            position: 'relative'
          }}>
            Contact
            <span style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '2px',
              backgroundColor: '#000000'
            }}></span>
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            lineHeight: '1.8', 
            color: '#4b5563', 
            marginBottom: '3rem', 
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '0 auto 3rem',
            fontWeight: '600'
          }}>
            "自分らしく生きる"学生を増やし、地方から日本を盛り上げていく。<br />
            このビジョンに共感される方はもちろん、ご質問やご不明点がある方も<br />
            お気軽にお問い合わせください！
          </p>
          
          <ContactForm />
        </div>
        
        {/* Profile Image (overlapping footer) */}
        <div style={{
          position: 'absolute',
          bottom: '-110px', /* -100pxから-110pxに変更して、少し下に移動 */
          left: '50%',
          transform: 'translateX(-50%)',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          border: '4px solid #ffffff',
          zIndex: 10
        }}>
          <img 
            src="/hero-converted.jpg" 
            alt="Yuya Takahashi"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>
      </section>
      
      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#000000', 
        color: 'white', 
        padding: '7rem 0 3rem', /* 上部パディングを6remから7remに増やして、Contactセクションとの間隔を広げる */
        borderTop: '1px solid #eaeaea'
      }}>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '0 2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <p style={{ fontSize: '1.1rem' }}>© 2023 髙橋邑弥. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
