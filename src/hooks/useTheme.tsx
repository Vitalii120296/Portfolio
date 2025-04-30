import React, { useLayoutEffect, useState } from 'react'

export default function useTheme(): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [theme, settheme] = useState(
    localStorage.getItem('app-theme') || 'dark',
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme])

  return [theme, settheme];
}
