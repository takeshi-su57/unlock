import React from 'react'
import styled from 'styled-components'
import FileSaver from 'file-saver'
import { ActionButton } from './buttons/ActionButton'
import Media from '../../theme/media'
import { camelCaseToTitle } from '../../utils/strings'
import { buildCSV } from '../../utils/csv'

interface KeyMetadata {
  // These 3 properties are always present -- they come down from the graph as
  // strings
  lockName: string
  expiration: string
  keyholderAddress: string
  // Can have any other arbitrary properies, as long as the values are strings.
  [key: string]: string
}

interface Props {
  // The keys to the metadata object, in the order they will be displayed.
  columns: string[]
  metadata: KeyMetadata[]
}

/**
 * Downloads a file with the key metadata as CSV
 * Includes the colum name in the first row
 */
function downloadAsCSV(columns: any, metadata: any) {
  const csv = buildCSV(columns, metadata)

  const blob = new Blob([csv], {
    type: 'data:text/csv;charset=utf-8',
  })
  FileSaver.saveAs(blob, 'members.csv')
}

export const MetadataTable = ({ columns, metadata }: Props) => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {columns.map(col => {
              return <Th key={col}>{camelCaseToTitle(col)}</Th>
            })}
          </tr>
        </thead>
        <Tbody>
          {metadata.map(datum => {
            return (
              <tr
                key={datum.lockName + datum.expiration + datum.keyholderAddress}
              >
                {columns.map(col => {
                  return <Td key={col}>{datum[col]}</Td>
                })}
              </tr>
            )
          })}
        </Tbody>
      </Table>
      <DownloadButton
        onClick={() => {
          downloadAsCSV(columns, metadata)
        }}
      >
        Export as CSV
      </DownloadButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(12, 1fr);
`

const DownloadButton = styled(ActionButton)`
  grid-row: 2;
  grid-column: 10/13;
  padding: 5px;
  align-self: end;
  height: 40px;
  ${Media.phone`
    display: none;
  `};
`

const Table = styled.table`
  grid-column: 1/13;
  width: 100%;
  border-collapse: collapse;
`

const Tbody = styled.tbody`
  color: var(--slate);
`

const Td = styled.td`
  padding: 0.5rem;
  text-align: left;
`

const Th = styled.th`
  font-family: 'IBM Plex Mono';
  font-size: 8px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--darkgrey);
  font-weight: 200;
  padding: 0.5rem;
  text-align: left;
`

export default MetadataTable
