import { useMutation } from '@tanstack/react-query'
import { storage } from '~/config/storage'

interface ClaimOption {
  data?: string
  email?: string
  captcha: string
  recipient?: string
}

interface Options {
  lockAddress: string
  network: number
}
export const useClaim = ({ lockAddress, network }: Options) => {
  return useMutation(
    ['claim', network, lockAddress],
    async ({ data, recipient, captcha, email }: ClaimOption) => {
      const response = await storage.claim(network, lockAddress, captcha, {
        recipient,
        data,
        email,
      })
      return {
        hash: response.data.transactionHash,
        owner: response.data.owner,
      }
    },
    {
      retry: 2,
    }
  )
}
