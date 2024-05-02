import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Button />', () => {
  // deve renderizar o tamanho do botão médio por padrão
  it('should render the medium button size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  // deve renderizar o tamanho do botão pequeno quando a prop size='small' for passada
  it('should render the small button size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  // deve renderizar o tamanho do botão grande quando a prop size='large' for passada
  it('should render the small button size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })
})
