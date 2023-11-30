import dayjs from 'dayjs' // ES 2015
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
export default function formatUTC(value) {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
}