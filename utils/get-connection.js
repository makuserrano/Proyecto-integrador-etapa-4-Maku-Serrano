import mongoose from 'mongoose'


// lo de insomia
const getConnection = async (uri_remota) => {
  try {
    await mongoose.connect(uri_remota)
    console.log("conexion ok pa")
  } catch(error){
    console.log("no funca",error)

  }
}

export default getConnection