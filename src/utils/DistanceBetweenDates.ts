import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function DistanceBetweenDate(data: string) {
  return formatDistance(new Date(data), Date.now(), {
    locale: ptBR,
    addSuffix: true,
  })
}
