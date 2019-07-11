function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatTimeout(timestamp) {
  let min = Math.floor(timestamp/1000/60%60),
      sec = Math.floor(timestamp/1000%60);

  if (min ==0 && sec == 0){
    return `结:束`
  }else{
    return `${formatNumber(min)}:${formatNumber(sec)}`;
  }
}

export default {
  formatNumber,
  formatTime
}
