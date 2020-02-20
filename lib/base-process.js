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
    let index = 0;
    let load = false;

    const plugFiles = () => {
      let files = []
  
      if (process.env.NODE_ENV === 'development') {

        files = files.concat(...['plug.dev.json', 'plug.development.json']);
        

      }

      if (process.env.NODE_ENV === 'production') {
        files = files.concat(...['plug.prod.json', 'plug.production.json']);
      }

      if (process.env.NODE_ENV === 'test') {
        files.push('plug.test.json');
      }

      files.push('plug.json');

      return files;
    }

    const readPlugFiles = () => {

      const files = plugFiles();
      while(load === false) {

       
        const configPath = path.resolve(process.cwd(), files[index]);

        if (!fs.existsSync(configPath) && files[index] === 'plug.json') {
          throw new Error(`Missing configuration file "plug.json" on root folder!`);
        }

        if (fs.existsSync(configPath)) {
          load = true;

          const json = fs.readFileSync(configPath, { encoding: 'utf-8' });
          context.add('config', JSON.parse(json || '{}'));
        }
        
        
        index++
      }
    }

    readPlugFiles();
    next();
  }
}