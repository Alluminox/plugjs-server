import dotenv from 'dotenv-safe';
import fs from 'fs';
import path from 'path';

export default {
  'LOAD_ENV': async ({ context }, next) => {

    console.log('[x] Process -> Loading environment variables!');
    dotenv.config();

    next();
  },
  
  'LOAD_CONFIG': async ({ context }, next) => {
    console.log('[x] Process -> Loading config file')

    const configPath = path.resolve(process.cwd(), 'plug.json');
    
    if (!fs.existsSync(configPath)) {
      throw new Error(`Missing configuration file "plug.json" on root folder!`);
    } 

    const json = fs.readFileSync(configPath, { encoding: 'utf-8' });
    context.add('config', JSON.parse(json || '{}'));

    next();
  }
}