import cron from 'node-cron'
import { Op } from 'sequelize'
import { Hook } from '../models'
import { notifyOfKeys, notifyOfLocks, renewAllKeys } from './jobs'
import { logger } from '../logger'
import { renewAllFiatKeys } from './jobs/renewFiatKeys'

logger.info('Websub server started.')

// every minute!
const CURRENT_CRON_SCHEDULE = '*/1 * * * *'

const run = async () => {
  logger.info('Running keys and locks job')

  const subscribers = await Hook.findAll({
    where: {
      mode: 'subscribe',
      expiration: {
        [Op.gte]: new Date(),
      },
    },
  })

  await Promise.allSettled([
    notifyOfKeys(subscribers),
    notifyOfLocks(subscribers),
    renewAllKeys(),
    renewAllFiatKeys(),
  ])

  logger.info('Finished running keys and locks job')
}
run()
cron.schedule(CURRENT_CRON_SCHEDULE, run)
