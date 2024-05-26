import { SimpleDirectoryReader } from "llamaindex/readers/SimpleDirectoryReader";

export const DATA_DIRS = process.env.DATA_DIRS

export async function getDocuments() {
  const directories = JSON.parse(DATA_DIRS as string) as string[] || ['./data']
  console.log('Loading files from directories', directories)
  return (await Promise.all(directories.map(dir => {
    return new SimpleDirectoryReader().loadData({
      directoryPath: dir,
    });
  }))).flat()
}
