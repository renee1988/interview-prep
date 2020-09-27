import glob from 'glob'

const globs: {[key: string]: string} = {
  camelCaseFile: '[A-Z]*.{md}',
  camelCaseDir: '[A-Z]*/{index,[A-Z]*}.{md}',
}

export function getAllMarkdowns(dirPath: string): Promise<string[]> {
    const patterns = Object.keys(globs).map(key => globs[key]);
    const pattern = `**/{${patterns.join(',')}}`

    return new Promise((resolve, reject) => {
        glob(pattern, {cwd: dirPath}, (err, files) => {
          if (err) {
            reject(err)
          }
          resolve(files)
        });
    });
}
