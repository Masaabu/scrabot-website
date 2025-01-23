"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { languages } from '@/locales/config'
import { useLocale } from '@/hooks/useLocale'


function LocaleSwitch() {
  const locale = useLocale();
  const placeholder = locale ? languages[locale] : "";

  return (
    <Select onValueChange={(value) => window.location.href = `/${value}`}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(languages).map((key, index) => (
          <SelectItem key={index} value={key}>{languages[key]}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LocaleSwitch