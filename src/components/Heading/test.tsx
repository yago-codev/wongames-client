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
      borderLeft: '0.7rem solid #F231A5'
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

  // deve renderizar um heading com um tamanho pequeno
  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)

    expect(screen.getByTestId('heading')).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByTestId('heading')).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  // deve renderizar um heading com uma linha na cor primária
  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Heading
      </Heading>
    )

    const heading = screen.getByTestId('heading')
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  // deve renderizar um heading com uma linha na cor secundária
  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Heading
      </Heading>
    )

    const heading = screen.getByTestId('heading')
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
