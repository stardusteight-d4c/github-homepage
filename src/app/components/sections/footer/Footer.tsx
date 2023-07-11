import { Github } from "../../atoms/icons/github"
import { Facebook } from "../../atoms/icons/social/facebook"
import { Linkedin } from "../../atoms/icons/social/linkedin"
import { Tiktok } from "../../atoms/icons/social/tiktok"
import { Twitch } from "../../atoms/icons/social/twitch"
import { Twitter } from "../../atoms/icons/social/twitter"
import { Youtube } from "../../atoms/icons/social/youtube"
import { Github as GithubIcon } from "../../atoms/icons/social/github"

interface Props {}

export const Footer = (props: Props) => {
  return (
    <section className="w-screen text-[#ffffff] mt-0 lg:mt-[110px] relative z-10 bg-[#0c1015] h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto mt-[200px] px-[8px] md:px-[16px]">
        <div className="lg:w-[936px] text-[#7d8590] text-[14px] leading-[21px] font-roboto ml-[24px] lg:ml-[12px]">
          <p className="flex items-center">
            <span className="block -mt-[28px] text-[12px] mr-1">1</span>The
            Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
            Security, a commissioned study conducted by Forrester Consulting,
            2022. Results are for a composite organization based on interviewed
            customers.
          </p>
          <p className="flex items-center">
            <span className="block -mt-[8px] text-[12px] mr-1 -ml-[12px]">
              2/3
            </span>
            GitHub, Octoverse 2022 The state of open source software.
          </p>
        </div>
        <div className="mt-[75px] flex flex-col md:flex-row">
          <div className="w-full lg:max-w-[416px]">
            <Github />
            <p className="flex flex-col mt-[25px] md:mt-[45px]">
              <span className="text-[#ffffff] text-[14px] leading-[21px] tracking-wide font-roboto font-medium">
                Subscribe to our newsletter
              </span>
              <span className="text-[#7d8590] text-[14px] leading-[21px] font-roboto">
                Get product updates, company news, and more.
              </span>
            </p>
            <button className="trial-span span mt-[16px] w-fit transition-all ease-in-out duration-300 relative flex items-center justify-center py-[12px] px-[22px] rounded-md bg-transparent border-[1px] hover:ring-[2px] hover:ring-[#f6f8fa] border-[#ffffff2e] font-semibold">
              <span className="text-base tracking-[0.03em] font-roboto font-medium">
                Subscribe
              </span>
            </button>
          </div>
          <div className="mt-[58px] md:mt-0 grid gap-y-[58px] grid-cols-2 md:grid-cols-4 justify-between w-full text-[#7d8590] text-[14px] leading-[21px]">
            <div className="col-span-1 flex flex-col gap-y-[16px]">
              <h3 className="font-jet-brains">Product </h3>
              <ul className="flex flex-col gap-y-[16px]">
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Features
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Security
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Team
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Enterprise
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Customer stories
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  The ReadME Project
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Pricing
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Resources
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col gap-y-[16px]">
              <h3 className="font-jet-brains">Platform</h3>
              <ul className="flex flex-col gap-y-[16px]">
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Developer API
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Partners
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Electron
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  GitHub Desktop
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col gap-y-[16px]">
              <h3 className="font-jet-brains">Support</h3>
              <ul className="flex flex-col gap-y-[16px]">
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Docs
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Community Forum
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Professional Services
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Premium Support
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Skills
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Status
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Contact GitHub
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col gap-y-[16px]">
              <h3 className="font-jet-brains">Company</h3>
              <ul className="flex flex-col gap-y-[16px]">
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  About
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Blog
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Careers
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Press
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Inclusion
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Social Impact
                </li>
                <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                  Shop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[180px] py-[24px] px-[16px] text-[#7d8590] bg-[#161b22] w-screen">
        <div className="max-w-7xl mx-auto grid grid-rows-2 md:flex justify-between">
          <div className="row-span-1 row-start-2 -mt-[28px] md:-mt-0">
            <ul className="md:flex items-center text-[12px] leading-[18px] md:gap-x-[16px]">
              <li>© 2023 GitHub, Inc.</li>
              <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                Terms
              </li>
              <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                Privacy (Updated 08/2022)
              </li>
              <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                Sitemap
              </li>
              <li className="w-fit cursor-pointer hover:text-[#2563eb] hover:underline hover:underline-[#2563eb]">
                What is Git?
              </li>
            </ul>
          </div>
          <div className="row-span-1 row-start-1">
            <ul className="flex items-center gap-x-[16px]">
              <li className="cursor-pointer">
                <Twitter className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <Facebook className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <Linkedin className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <Youtube className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <Twitch className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <Tiktok className="w-[18px] h-[18px]" />
              </li>
              <li className="cursor-pointer">
                <GithubIcon className="w-[18px] h-[18px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
