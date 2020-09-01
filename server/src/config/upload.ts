import multer from 'multer';

import path from 'path';
import crypto from 'crypto';

const fodlerPath = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: fodlerPath,

  storage: multer.diskStorage({
    destination: fodlerPath,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
