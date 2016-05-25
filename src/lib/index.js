export function loadGoods (truck: string, goods: Array<string>) : string {
  return truck.replace(/(\s|^)\$(\d+)(\s|$)/g, (_, pre, num, post) => {
    let good = goods[num - 1]
    if (good == null) good = ''
    return pre + good + post
  })
}
