import styled from 'styled-components'
import React from 'react'

interface Props {
  address: string
  className: string
  id: string
}

const Address = ({ id, className, address }: Props) => {
  return (
    <Abbrevation id={id} className={className} title={address}>
      {address}
    </Abbrevation>
  )
}

Address.defaultProps = {
  className: '',
}

const Abbrevation = styled.abbr`
  border-bottom: none !important;
  cursor: inherit !important;
  text-decoration: none !important;
`

export default Address
