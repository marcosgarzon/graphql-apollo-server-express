import connectDB from './mongoDb.js'

class Loaders {
  start() {
    connectDB()
  }
}

const loader = new Loaders()
export default loader