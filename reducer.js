// Pure function
const reducer = (store = null, action) => {
    console.log(action)

    let newStore = store
    switch (action.type) {
      case 'update':
        newStore = action.payload
        break
      default:
        break
    }

    console.log('============= STORE ============')
    console.log(newStore)

    return newStore
  }

export default reducer
  