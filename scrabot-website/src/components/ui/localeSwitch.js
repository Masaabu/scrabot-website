"use client"

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { languages } from '@/locales/config'
import { useLocale } from '@/hooks/useLocale'

function LocaleSwitch() {
  const locale = useLocale()

  return (
    <DropdownMenu>
    <DropdownMenuTrigger>{languages[locale]}</DropdownMenuTrigger>
    <DropdownMenuContent>
        {Object.keys(languages).map((key, index) => (
          <DropdownMenuItem key={index} onSelect={() => window.location.href = `/${key}`}>{languages[key]}</DropdownMenuItem>
        ))}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default LocaleSwitch