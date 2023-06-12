const usersAlreadyCalled = {}

export const removeUserAccesses = (name) => {
  usersAlreadyCalled[name] = 0
  return usersAlreadyCalled[name]
}

export const getUserAccessByName = (name) => {
  return usersAlreadyCalled[name] || 0
}

export const incrementUserCall = (name = '') => {
  if (!name) return
  
  if (usersAlreadyCalled[name]) {
    const timesCalled = usersAlreadyCalled[name]
    usersAlreadyCalled[name] = timesCalled + 1
  }

  if (!usersAlreadyCalled[name]) {
    usersAlreadyCalled[name] = 1
  }
}
