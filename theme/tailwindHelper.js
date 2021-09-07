module.exports = {
  // antd colors是个数组, tailwind是对象 转换函数
  antdColor2Tailwind (arr = []) {
    if (!arr || !arr.length) { return {} };
    const obj = {
      DEFAULT: arr[5],
      light: arr[4],
      deep: arr[6],
    }
    arr.forEach((item, index) => {
      obj[`${index + 1}`] = item
    })
    return obj;
  }
}