import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="flex mx-4 w-full z-40" >
      <div className=" fixed inset-x-0 wsupports-backdrop-blur:bg-white/60   w-full  bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 border-b border-slate-900/10">
        <div className="mx-auto">
          <div className="py-3 dark:border-slate-300/10 lg:mx-0  lg:px-4">
            <div className="flex items-center gap-2">
              <a
                className="mr-3 w-[2.0625rem]  flex overflow-hidden md:w-auto justify-items-center "
                href="/"
              >
                <div className="flex flex-row gap-1 items-center">
                  <div className="bg-[#0f0f0f] h-11 w-11 rounded-full flex  justify-center items-center">
                    <p className="text-lg text-white font-bold">Wiki</p>
                  </div>
                  <h1 className="text-lg font-semibold">Academy</h1>
                </div>
              </a>

              <div className="relative">
                <button
                  className="dark:highlight-white/5 flex items-center space-x-2 rounded-full bg-slate-400/10 py-1 px-3 text-xs font-semibold leading-5 hover:bg-slate-400/20"
                  id="headlessui-menu-button-1"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="6"
                    height="3"
                    className="ml-2 overflow-visible"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 0L3 3L6 0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
              
              <a
                className="ml-3 hidden md:flex items-center rounded-full bg-sky-400/10 py-1 px-3 text-xs font-medium leading-5 text-sky-600 hover:bg-sky-400/20 dark:text-sky-400 xl:flex"
                href="/videos"
              >
              

                <strong className="font-semibold">Wiki Academy</strong>
                
                <div className="ml-2 hidden lg:flex"> Aprenda, tire dúvidas sobre tecnología e mais.</div>

                <svg
                  width="3"
                  height="6"
                  className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
                  aria-hidden="true"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <div className="relative ml-auto hidden items-center lg:flex">
                <nav className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/search"
                      >
                        Busca
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href="/showcase"
                      >
                        Showcase
                        <span className="ml-2 rounded-full bg-sky-400/10 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600 dark:text-sky-400">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800">
                  <label
                    className="sr-only"
                    id="headlessui-listbox-label-3"
                    data-headlessui-state=""
                  >
                    Theme
                  </label>
                  <button
                    type="button"
                    id="headlessui-listbox-button-4"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                    aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4"
                  >
                    <span className="dark:hidden">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          className="fill-sky-400/20 stroke-sky-500"
                        ></path>
                        <path
                          d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                          className="stroke-sky-500"
                        ></path>
                      </svg>
                    </span>
                    <span className="hidden dark:inline">
                      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                          className="fill-sky-400/20"
                        ></path>
                        <path
                          d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                          className="fill-sky-500"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                          className="fill-sky-500"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <a
                    href="https://github.com/tailwindlabs/tailwindcss"
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <span className="sr-only">Tailwind CSS on GitHub</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="h-5 w-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <button
                type="button"
                className="-my-1 ml-auto flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 lg:hidden"
              >
                <span className="sr-only">Search</span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5"></path>
                  <circle cx="11" cy="11" r="6"></circle>
                </svg>
              </button>
              <div className="-my-1 ml-2 lg:hidden">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                >
                  <span className="sr-only">Navigation</span>
                  <svg width="24" height="24" fill="none" aria-hidden="true">
                    <path
                      d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="styledHeader"></div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden items-center border-y border-slate-900/10 p-4 dark:border-slate-50/[0.06] ">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Navigation</span>
              <svg width="24" height="24">
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
              <li className="flex items-center">
                Borders
                <svg
                  width="3"
                  height="6"
                  aria-hidden="true"
                  className="mx-3 overflow-visible text-slate-400"
                >
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </li>
              <li className="truncate font-semibold text-slate-900 dark:text-slate-200">
                Border Style
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* <Link href="/" classNameName="px-2 py-1 bg-white text-blue-500">
        Home
      </Link>
      <Link href="/todos" classNameName="px-2 py-1 bg-white text-blue-500 " >
        Todos
      </Link>
      <Link href="/search" classNameName="px-2 py-1 bg-white text-blue-500 " >
        Search
      </Link> */}
    </header>
  );
}
export default Header;
