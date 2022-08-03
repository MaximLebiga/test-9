export const setRange = (data) => {
  return data.map((obj) => {
    if (0 <= obj.price && obj.price <= 499) {
      obj.range = '0-499'
    }
    if (500 <= obj.price && obj.price <= 999) {
      obj.range = '500-999'
    }
    if (1000 <= obj.price && obj.price <= 1499) {
      obj.range = '1000-1499'
    }
    if (1500 <= obj.price && obj.price <= 2000) {
      obj.range = '1500-2000'
    }
    obj.type = '1'
    return obj
  })
}