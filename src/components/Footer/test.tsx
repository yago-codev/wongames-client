import { screen } from '@testing-library/react'

import Footer from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)

    const contactUsColumn = screen.getByText(/contact us/i)
    const followUsColumn = screen.getByText(/follow us/i)
    const linksColumn = screen.getByText(/links/i)
    const locationColumn = screen.getByText(/location/i)

    expect(contactUsColumn).toBeInTheDocument()
    expect(followUsColumn).toBeInTheDocument()
    expect(linksColumn).toBeInTheDocument()
    expect(locationColumn).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
