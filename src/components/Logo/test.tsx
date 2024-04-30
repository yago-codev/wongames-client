import { screen } from '@testing-library/react'

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
})
