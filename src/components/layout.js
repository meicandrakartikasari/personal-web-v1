import * as React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import "../styles/global.css";
import { Dialog, DialogPanel, MenuHeading } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "./about";
import Experience from "./experience";
import Project from "./project";

import { HSScrollspy, HSCollapse, HSStaticMethods } from "@preline/scrollspy";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // const el = HSScrollspy.getInstance(
  //   '[data-hs-scrollspy="#scrollspy-1"]',
  //   true
  // );
  // const collapse = HSCollapse.getInstance(
  //   '[data-hs-collapse="#navbar-collapse-basic"]',
  //   true
  // );

  // el.element.on("beforeScroll", (instance) => {
  //   return new Promise((res) => {
  //     if (collapse.element.el.classList.contains("open")) {
  //       collapse.element.hide();
  //       HSStaticMethods.afterTransition(collapse.element.content, () =>
  //         res(true)
  //       );
  //     } else {
  //       res(true);
  //     }
  //   });
  // });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm py-4 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a
              className="flex-none text-xl font-semibold text-gray-800 dark:text-neutral-200"
              href="#"
            >
              Your Brand
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-basic"
                aria-controls="navbar-collapse-basic"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
                <svg
                  className="hs-collapse-open:block hidden size-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-basic"
            className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div
              data-hs-scrollspy="#scrollspy-1"
              data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
              className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 [--scrollspy-offset:220] md:[--scrollspy-offset:70]"
            >
              <a
                className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-neutral-300 dark:hs-scrollspy-active:text-blue-500 active"
                href="#about"
              >
                About
              </a>
              <a
                className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-neutral-300 dark:hs-scrollspy-active:text-blue-500"
                href="#experience"
              >
                Experience
              </a>

              <a
                className="hs-scrollspy-active:text-blue-600 text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-neutral-300 dark:hs-scrollspy-active:text-blue-500"
                href="#project"
              >
                Project
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div
        id="scrollspy-scrollable-parent-1"
        className="max-h-[340px] overflow-y-auto bg-white rounded-lg pb-4 px-6 dark:bg-neutral-800"
      >
        <div id="scrollspy-1" className="mt-3 space-y-4">
          <div id="about">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              First
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-500">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting.
            </p>
          </div>

          <div id="experience">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Second
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-500">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting. This is some placeholder content for the
              scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated
              throughout the component example. We keep adding some more example
              copy here to emphasize the scrolling and highlighting. This is
              some placeholder content for the scrollspy page. Note that as you
              scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="project">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Third
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-neutral-500">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </div>
      </div> */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <header className="sticky top-0 inset-x-0 top-0 z-50">
                  <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Write here
                  </h3>
                  <div className="mt-10 flex gap-x-6">
                    <div className="text-lg font-semibold leading-6 text-gray-900">
                      <h4>YOUR TEXT HERE</h4>
                    </div>
                  </div>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    description here description here description here
                    description here description heredescription here
                    description here
                  </dd>
                  <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                  ></nav>
                  <div>about</div>
                  <div>experience</div>
                  <div>project</div>
                </header>
              </div>
              <div className="relative pl-16">
                <div className="w-full h-42 overflow-y-scroll no-scrollbar">
                  GeeksforGeeks is a popular online learning platform that
                  provides computer science students, software engineers, and
                  other tech professionals with a wide range of resources to
                  enhance their coding skills and knowledge. It offers a variety
                  of resources, including articles, coding challenges, video
                  tutorials, online courses, and interview preparation
                  materials. The platform covers a wide range of topics in
                  computer science, including algorithms, data structures,
                  programming languages, software development, machine learning,
                  and more. afasf
                  {/* <About></About>
                  <Experience></Experience>
                  <Project></Project> */}
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* <header className="absolute inset-x-0 top-0 z-50">
        {data.site.siteMetadata.title}

        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="/blog"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="/blog"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </a>
                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header> */}
      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Write here
            </h3>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="text-lg font-semibold leading-6 text-gray-900">
                <h4>YOUR TEXT HERE</h4>
              </div>
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              description here description here description here description
              here description heredescription here description here
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Layout;
