import md5 from 'blueimp-md5'

export function getAvatar(avatar) {
  if (/^[0-9]+$/.test(avatar)) {
    return `http://q1.qlogo.cn/g?b=qq&nk=${avatar}&s=5`
  } else {
    let hash = md5(avatar)
    return `https://cdn.v2ex.com/gravatar/${hash}`
  }
}

export function replaceContent(content) {
  if (content.indexOf('ftn.qq.com') > -1) content = content.replace('ftn_handler/', 'rkey=')
  if (content.indexOf('ksyun.php') > -1) content = content.replace('/static/danmu/ksyun.php?', '') + '@ksyun'
  if (content.indexOf('zhilian2.php') > -1) content = content.replace('http://119.23.209.33/static/danmu/zhilian2.php?http://47.94.243.190:8081/play/', '') + '@c_360'
  if (content.indexOf('san.php') > -1) content = content.replace('http://www.zzzfun.com/static/danmu/san.php?v360?v=', '') + '@s_360'
  if (content.indexOf('sharepoint') > -1) {
    content = decodeURIComponent(content)
    content = content.replace(/personal([\s\S]+?)id=\//g, '').replace(/&parent(\S*)/g, '')
    console.log(content)
  }
  return content
}

export let isDev = process.env.NODE_ENV === 'development'
export const HOME_LINK = 'https://www.clicli.us'
export const API_LINK = 'https://api.clicli.us'
export const I_LINK = 'https://i.clicli.us'