"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// FIX: Kita pakai React.ComponentProps untuk mengambil tipe otomatis dari library-nya
// Jadi gak perlu import manual dari 'next-themes/dist/types' yang bikin error
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}