/*
 * @Author: weina
 * @Date: 2018-06-10 23:43:30
 */

import jsonp from 'common/js/jsonp'
import {
  commonParam,
  options
} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParam, {
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
