import { screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Heading />', () => {
  // deve renderizar um heading branco por padrão
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)

    expect(screen.getByTestId('heading')).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  // deve renderizar um heading preto quando a cor preta passada
  it('should render a black heading when color black passed', () => {
    renderWithTheme(<Heading color="black">Heading</Heading>)

    expect(screen.getByTestId('heading')).toHaveStyle({
      color: '#030517'
    })
  })

  // deve renderizar um heading com uma linha na parte esquerda
  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Heading</Heading>)

    expect(screen.getByTestId('heading')).toHaveStyle({
      borderLeft: '0.7rem solid #3CD3C1'
    })
  })

  // deve renderizar um heading com uma linha na parte inferior
  it('should render a heading with a line to the bottom side', () => {
    renderWithTheme(<Heading lineBottom>Heading</Heading>)

    expect(screen.getByTestId('heading')).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
