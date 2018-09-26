module.exports = (client, hasher) => {
  hasher = hasher || JSON.stringify

  let clone = []
  let lookup = {}
  for (let index = 0; index < client.length; index++) {
    const element = client[index];
    let hashed = hasher(element)
    if (!lookup[hashed]) {
      clone.push(element)
      lookup[hashed] = true
    }

  }
  return clone

}