import { useCallback, useMemo } from 'react'

interface PriceFormatterOptions {
  decimals?: boolean
}

export const usePriceFormatter = () => {
  return useCallback(
    (price: number) =>
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(price),
    []
  )
}

export const useFormattedPrice = (price: number) => {
  const formatter = usePriceFormatter()

  return useMemo(() => formatter(price), [formatter, price])
}