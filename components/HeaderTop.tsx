'use client'
import { useEffect, useRef, useState } from 'react'
import { MdOutlineLanguage } from 'react-icons/md'
import { AiOutlineCheck } from 'react-icons/ai'
//next link
import Link from 'next/link'
//icons
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { CSSTransition } from 'react-transition-group'
const languages = [
  { name: 'Русский', short: 'RU' },
  { name: 'Казакша', short: 'KZ' },
]

const HeaderTop = () => {
  const [selectedLang, setSelectedLang] = useState<string>(languages[0].short)
  const [popup, setPopup] = useState<boolean>(false)
  const ref = useRef<HTMLButtonElement>(null)

  const handleClickOutsidePopup = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setPopup(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsidePopup)
    return () => document.removeEventListener('click', handleClickOutsidePopup)
  }, [])

  return (
    <div className="py-4 relative border-b border-gray-100">
      <div className="container flex items-center justify-between">
        {/* lang */}
        <div>
          <button
            className="flex items-center gap-6 group transition-all duration-300"
            ref={ref}
            onClick={() => setPopup(!popup)}
          >
            <div className="relative group-hover:transform group-hover:-translate-y-[3px] transition-all duration-300">
              <span className="absolute bg-primary rounded-full px-1.5 -top-1 -right-[18px] text-[10px] text-white ">
                {selectedLang}
              </span>
              <MdOutlineLanguage className="w-6 h-6 group-hover:text-primary transition-all duration-300" />
            </div>
            <div className="text-sm group-hover:text-primary transition-all duration-300 font-medium">
              Язык
            </div>
          </button>
          <CSSTransition
            in={popup}
            timeout={900}
            classNames="my-popup"
            unmountOnExit
          >
            <div className="absolute opacity-1 top-[105%] bg-white  w-[160px] shadow-md rounded-xl  overflow-hidden">
              <ul className=" ">
                {languages.map((lang) => (
                  <li
                    className={` hover:bg-gray-100 text-sm last:mb-0 flex items-center justify-between cursor-pointer leading-10 px-2 select-none`}
                    key={lang.name}
                    onClick={() => {
                      setPopup(false)
                      setSelectedLang(lang.short)
                    }}
                  >
                    <span>{lang.name}</span>
                    <span>
                      {lang.short === selectedLang && (
                        <AiOutlineCheck className="text-primary font-semibold" />
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        </div>
        {/* nav */}
        <div>
          <ul className="flex gap-x-5">
            <li className="hover:text-primary transition-all duration-300 text-sm flex items-center gap-x-2">
              <span className="animate-pulse">
                <RiCheckboxBlankCircleFill className="w-2.5 h-2.5 text-red-400" />
              </span>
              <Link href={'/'}>Прямой эфир</Link>
            </li>
            <li className="hover:text-primary transition-all duration-300 text-sm">
              <Link href={'/'}>Франшиза</Link>
            </li>
            <li className="hover:text-primary transition-all duration-300 text-sm">
              <Link href={'/'}>О нас</Link>
            </li>
            <li className="hover:text-primary transition-all duration-300 text-sm">
              <Link href={'/'}>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
