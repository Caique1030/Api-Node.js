import mongoose from "mongoose";

async function conectaNaDatabase() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão bem-sucedida com o banco de dados");
    return mongoose.connection;
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Encerra o processo com falha
  }
}

export default conectaNaDatabase;
