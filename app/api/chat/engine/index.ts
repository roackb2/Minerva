import { VectorStoreIndex } from "llamaindex";
import { PGVectorStore } from "llamaindex/storage/vectorStore/PGVectorStore";
import { MilvusVectorStore } from "llamaindex/storage/vectorStore/MilvusVectorStore";
import {
  PGVECTOR_SCHEMA,
  PGVECTOR_TABLE,
  checkRequiredEnvVars,
} from "./shared";

export async function getDataSource() {
  // checkRequiredEnvVars();
  // const pgvs = new PGVectorStore({
  //   connectionString: process.env.PG_CONNECTION_STRING,
  //   schemaName: PGVECTOR_SCHEMA,
  //   tableName: PGVECTOR_TABLE,
  // });
  // return await VectorStoreIndex.fromVectorStore(pgvs);
  const milvusvs = new MilvusVectorStore({
    collection: "embedding_1536",
    embeddingKey: "embeddings",
    idKey: "id",
    contentKey: "text",
    metadataKey: '$meta'
  });
  return await VectorStoreIndex.fromVectorStore(milvusvs);
}
