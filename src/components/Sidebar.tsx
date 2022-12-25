/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { AiOutlineCalendar, AiOutlineFolder, AiOutlineHome } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import { BsBarChartLine, BsBoxSeam } from 'react-icons/bs';

import logo from '../assets/images/icon.svg';
import { useAppDispatch, usePermission, useRedux } from '../hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { setActiveComponent } from '../redux/layout/layoutSlicer';

interface menuOption {
  key: string,
  name: string,
  icon: any,
  href: string,
  children: any,
  permission?: 'admin' | 'user' | 'all',
  onClick?: ()=>void,
}


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigation: menuOption[] = [
    {
      key: 'dashboard',
      name: 'Dashboard',
      icon: AiOutlineHome,
      href: '#',
      children: null,
      permission: 'all',
      onClick: ()=> dispatch(setActiveComponent("dashboard"))
    },
    {
      key: 'ocurrences',
      name: 'Ocorrências',
      icon: GoChecklist,
      href: '#',
      permission: 'user',
      children: null,
      onClick: ()=> dispatch(setActiveComponent("userOcurrences"))
    }
    // {
    //   name: 'Projects',
    //   icon: AiOutlineFolder,
    //   current: false,
    //   children: [
    //     { name: 'Overview', href: '#' },
    //     { name: 'Members', href: '#' },
    //     { name: 'Calendar', href: '#' },
    //     { name: 'Settings', href: '#' },
    //   ],
    // },
    // {
    //   name: 'Calendar',
    //   icon: AiOutlineCalendar,
    //   current: false,
    //   children: [
    //     { name: 'Overview', href: '#' },
    //     { name: 'Members', href: '#' },
    //     { name: 'Calendar', href: '#' },
    //     { name: 'Settings', href: '#' },
    //   ],
    // },
    // {
    //   name: 'Documents',
    //   icon: BsBoxSeam,
    //   current: false,
    //   children: [
    //     { name: 'Overview', href: '#' },
    //     { name: 'Members', href: '#' },
    //     { name: 'Calendar', href: '#' },
    //     { name: 'Settings', href: '#' },
    //   ],
    // },
    // {
    //   name: 'Reports',
    //   icon: BsBarChartLine,
    //   current: false,
    //   children: [
    //     { name: 'Overview', href: '#' },
    //     { name: 'Members', href: '#' },
    //     { name: 'Calendar', href: '#' },
    //     { name: 'Settings', href: '#' },
    //   ],
    // },
  ]
  const permission = usePermission();
  const [details, setDetails] = useState<boolean>(false)
  const [active, setActive] = useState<string>();
  const [submenuActive, setSubmenuActiveActive] = useState<string>();

  return (
    <div className={`flex flex-col flex-grow border-r border-gray-200 dark:border-gray-600 pt-5 pb-4 bg-white dark:bg-gray-800 overflow-y-auto h-screen transition-all delay-150 ${details ? 'w-60':'w-20'}`}>
      <div className="flex items-center justify-center flex-shrink-0 px-4">
        <img
          className=""
          // src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          src={logo}
          alt="Workflow"
          width={"30px"}
          onClick={()=> setDetails(!details)}
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className={`flex-1  ${details ? 'px-2':'mx-auto'} space-y-1 bg-white dark:bg-gray-800`} aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  onClick={() =>{ setActive(item?.key); item?.onClick?.()}}
                  href="#"
                  className={classNames(
                    active === item.key
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-indigo-300'
                      : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex gap-3 items-center p-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none hover:ring-2 hover:ring-indigo-500  transition-all delay-150'
                  )}
                >
                  <item.icon
                    className={classNames(
                      active === item.key ? 'text-gray-500 dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
                      'flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />

                  {details && item.name}
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.key} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        active === item.key
                          ? 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-indigo-300'
                          : 'bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none hover:ring-2 hover:ring-indigo-500'
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150'
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item?.children?.map((subItem: any) => (
                        <Disclosure.Button
                          onClick={() => { setActive(item.name); setSubmenuActiveActive(subItem.name);  item?.onClick?.() }}
                          key={subItem.name}
                          as="a"
                          href={subItem.href}
                          className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-gray-900 hover:bg-gray-200"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;
