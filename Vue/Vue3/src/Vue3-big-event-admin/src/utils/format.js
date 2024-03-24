import { dayjs } from 'element-plus'

export const formatTime = (date) => dayjs(date).format('YYYY年MM月DD日')
