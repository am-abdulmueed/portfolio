'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export default function LanguageToggle() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState('vi');

  useEffect(() => {
    // Lấy ngôn ngữ từ localStorage hoặc mặc định là 'vi'
    const savedLang = localStorage.getItem('language') || 'vi';
    setCurrentLang(savedLang);
  }, []);

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const toggleLanguage = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('language', langCode);
    // Reload trang để áp dụng ngôn ngữ mới
    router.refresh();
    location.reload();
    console.log('toggleLanguage', langCode);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light"
          className="flex items-center space-x-2"
        >
          <span>{languages.find(lang => lang.code === currentLang)?.flag || '🌐'}</span>
          <span className="hidden sm:inline">
            {languages.find(lang => lang.code === currentLang)?.name || 'Language'}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language options">
        {languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            onClick={() => toggleLanguage(lang.code)}
            className="flex items-center space-x-2"
          >
            <span>{lang.flag}     </span>
            <span>{lang.name}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
} 