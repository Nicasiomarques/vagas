import { readFile } from 'fs/promises';

export const importFile = async (filePath) => {
  try {
    const jsonData = await readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  } catch (error) {
    console.error(`Failed to import JSON file: ${error}`);
    throw error;
  }
};
