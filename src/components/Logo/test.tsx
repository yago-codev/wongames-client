import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  // deve renderizar um label branco por padrão
  it('should render a white label by default', () => {
    // renderizar o componente `render`
    renderWithTheme(<Logo />)

    // selecionar o elemento testado `screen`
    // expect - assertion - asserção - comparação - análise
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  // deve renderizar um label preto quando a cor for passada por parâmetro
  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  // deve renderizar um logo grande
  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  // deve renderizar um logo normal quando size for default
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo size="normal" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  // deve renderizar um logo grande sem texto se hideOnMobile for true
  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
