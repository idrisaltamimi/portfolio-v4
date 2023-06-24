import { useEffect } from "react"

export default function useHelmet(title: string) {
  useEffect(() => {
    document.title = title
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
