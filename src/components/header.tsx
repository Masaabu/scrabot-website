"use server"

import { getLocale } from "@/lib/getLocale";
import LocaleSwitch from "./ui/localeSwitch";

export default async function Header() {
  const locale = await getLocale()

  return (
    <header className="fixed z-50 h-[52px] w-full p-2 content-center md:text-left text-center bg-transparent backdrop-brightness-75 backdrop-blur">
      <div className="md:flex block">
        <a href={`/${locale}`} className="text-white no-underline text-[x-large] pl-0 md:pl-6">ScraBot</a>
        <div className="md:block hidden ml-auto">
          <LocaleSwitch />
        </div>
      </div>
    </header>
  );
}