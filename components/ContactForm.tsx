"use client";

import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', company: '', email: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-12 max-w-5xl mx-auto">
      <h3 className="text-4xl font-bold mb-12 text-[#000000]">お問い合わせ</h3>
      
      {isSubmitted ? (
        <div className="text-center py-12">
          <p className="text-2xl text-green-600 mb-5">お問い合わせありがとうございます！</p>
          <p className="text-xl text-gray-700">メッセージを受け取りました。2営業日以内にご返信いたします。</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-14">
          <div className="space-y-5">
            <label htmlFor="name" className="block text-2xl font-medium text-gray-700">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border-2 border-gray-300 rounded-md px-10 py-8 text-2xl focus:border-[#000000] focus:outline-none transition"
              placeholder="山田 太郎"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-5">
            <label htmlFor="company" className="block text-2xl font-medium text-gray-700">会社名・団体名</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full border-2 border-gray-300 rounded-md px-10 py-8 text-2xl focus:border-[#000000] focus:outline-none transition"
              placeholder="株式会社〇〇"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-5">
            <label htmlFor="email" className="block text-2xl font-medium text-gray-700">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border-2 border-gray-300 rounded-md px-10 py-8 text-2xl focus:border-[#000000] focus:outline-none transition"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-5">
            <label htmlFor="message" className="block text-2xl font-medium text-gray-700">メッセージ</label>
            <textarea
              id="message"
              name="message"
              required
              rows={12}
              className="w-full border-2 border-gray-300 rounded-md px-10 py-8 text-2xl focus:border-[#000000] focus:outline-none transition resize-none"
              placeholder="お問い合わせ内容をご記入ください"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#000000] hover:bg-[#333333] text-white py-8 px-12 rounded-md text-3xl font-bold transition flex items-center justify-center mt-10"
            style={{ color: 'white' }}
          >
            <FiSend className="mr-5" size={36} style={{ color: 'white' }} /> <span style={{ color: 'white' }} className="text-white">送信する</span>
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 