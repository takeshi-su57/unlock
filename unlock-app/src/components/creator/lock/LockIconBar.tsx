import React, { useContext } from 'react'

import Buttons from '../../interface/buttons/lock'
import CreatorLockStatus from './CreatorLockStatus'
import withConfig, { ConfigContext } from '../../../utils/withConfig'
import { AuthenticationContext } from '../../../contexts/AuthenticationContext'

interface LockIconBarProps {
  lock: any
  withdraw: (...args: any) => void
  toggleCode: () => void
  toggleCreditCard: () => void
}
export function LockIconBar({
  lock,
  toggleCode,
  withdraw,
  toggleCreditCard,
}: LockIconBarProps) {
  const config: any = useContext(ConfigContext)
  const { network } = useContext(AuthenticationContext)

  // If there is any blocking transaction, we show the lock as either submitted or confirming
  const hasBlockingTransaction =
    lock?.transactions && Object.keys(lock?.transactions).length > 0
  if (hasBlockingTransaction) {
    // Only take the first one (TODO: support for multiple?)
    const transactionHash = Object.keys(lock.transactions)[0]
    const transaction = lock.transactions[transactionHash]
    return (
      <CreatorLockStatus
        confirmations={transaction.confirmations}
        hash={transactionHash}
        lock={lock}
      />
    )
  }
  const membersPage = `/members?locks=${lock.address}`
  const verifiersPage = `/${network}/locks/${lock.address}/verifiers`
  const { explorer } = config.networks[network!] ?? {}
  // Otherwise, we just show the lock icon bar
  return (
    <div className="flex flex-wrap justify-around items-center max-w-[250px]">
      <Buttons.CreditCard as="button" lock={lock} action={toggleCreditCard} />
      <Buttons.Withdraw as="button" lock={lock} withdraw={withdraw} />
      <Buttons.Demo
        as="a"
        href={`/demo?network=${network}&lock=${lock.address}`}
        target="_blank"
      />
      <Buttons.Members href={membersPage} />
      <Buttons.AppStore as="button" action={toggleCode} />
      {explorer && (
        <Buttons.Explorer
          target="_blank"
          href={explorer.urls.address(lock.address)}
        />
      )}
      <Buttons.Verifiers as="a" href={verifiersPage} />
    </div>
  )
}

export default withConfig(LockIconBar)
