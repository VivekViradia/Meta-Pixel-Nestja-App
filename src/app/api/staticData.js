import path from 'path';
import { promises as fs } from 'fs';
// import data from '../Data/ProductData.json'

export default async function handler(req, res) {

    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'Data');
    console.log('jsonDirectory', jsonDirectory)

    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/ProductData.json', 'utf8');
    console.log('fileContents', fileContents)

    //Return the content of the data file in json format
    res.status(200).json(fileContents);
}