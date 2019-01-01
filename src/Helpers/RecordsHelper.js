import sortBy from 'lodash/sortBy'
import uniqBy from 'lodash/uniqBy'
import reverse from 'lodash/reverse'
import PrettierLog from 'reactotron-prettier-log'

export const prepare = (records, sortByList = [ 'insertedAt', 'id' ], reverseRecords = true) => {
  PrettierLog.log('records', { records })
  const result = sortBy(uniqBy(records, 'id'), sortByList)
  if (!reverseRecords) return result
  return reverse(result)
}
