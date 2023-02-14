import { mongoose } from 'mongoose'
import * as dotenv from 'dotenv' 
dotenv.config()

const URI = process.env.USER_URI

const connectDB = async () => {
    try {
      await mongoose.set('strictQuery', true)
      await mongoose.connect(URI)
      console.log('La base de datos de Mongo ha sido conectada.')
    } catch (error) {
      console.error(`Error al conectarse a la base de datos: ${error.message}`)
    }
  }

export default connectDB