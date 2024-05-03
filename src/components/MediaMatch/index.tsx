import { DefaultBreakpoints } from 'styled-media-query'

import * as S from './styles'

export type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
  children?: React.ReactNode
}

const MediaMatch = ({ lessThan, greaterThan, children }: MediaMatchProps) => {
  return (
    <S.MediaMatch lessThan={lessThan} greaterThan={greaterThan}>
      {children}
    </S.MediaMatch>
  )
}

export default MediaMatch
