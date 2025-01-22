"use server"

import { getLocale } from "@/lib/getLocale";
import LocaleSwitch from "./ui/localeSwitch";

export default async function Header() {
  const locale = await getLocale()

  return (
    <header className="fixed h-[52px] w-full p-2 content-center text-center md:text-left bg-transparent backdrop-brightness-75 backdrop-blur">
      <div className="flex">
        <a href={`/${locale}`} className="text-white no-underline text-[x-large] pl-0 md:pl-6">ScraBot</a>
        <div className="ml-auto">
          <LocaleSwitch />
        </div>
      </div>
    </header>
  );
}