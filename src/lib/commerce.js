import Commerce from '@chec/commerce.js'
//connect to commerceJs
export const commerce = new Commerce(process.env.REACT_APP_CHECK, true)
