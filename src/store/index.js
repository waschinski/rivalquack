import { createStore } from 'vuex'

import gamedata from "./GameData"

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function () {
  const Store = createStore({
    modules: {
      gamedata,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  return Store
}
