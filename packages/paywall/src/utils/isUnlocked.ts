import { PaywallConfig, NetworkConfigs } from '@unlock-protocol/types'
import { hasValidKey } from './hasValidKey'

/**
 * A function which, given a user account, a paywall config will return the list of unlocked locks.
 * It will first check for the existence of keys, and if no valid one has been found
 * it will check for pending transactions which might be optimistic.
 */
export const isUnlocked = async (
  userAccountAddress: string,
  paywallConfig: PaywallConfig,
  networks: NetworkConfigs
): Promise<string[]> => {
  const unlockedLocks: string[] = []
  await Promise.all(
    // For each lock
    Object.entries(paywallConfig.locks).map(async ([lockAddress]) => {
      const network =
        paywallConfig.locks[lockAddress].network || paywallConfig.network
      const { provider } = networks[network]
      const isValidMember = await hasValidKey(
        provider,
        lockAddress,
        userAccountAddress!
      )
      if (isValidMember) {
        // This lock is unlocked!
        unlockedLocks.push(lockAddress)
      }
    })
  )

  return unlockedLocks
}
export default {
  isUnlocked,
}
