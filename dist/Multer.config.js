"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const path = require("path");
const common_1 = require("@nestjs/common");
const dirName = __dirname;
const imagePath = path.join(dirName + `/productPictures`);
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return callback(new common_1.BadRequestException('Only image files are allowed'), false);
    }
    callback(null, true);
};
exports.multerOptions = {
    storage: (0, multer_1.diskStorage)({
        filename: (req, file, callback) => {
            const fileExtName = (0, path_1.extname)(file.originalname);
            callback(null, `${Date.now()}${fileExtName}`);
        },
    }),
    fileFilter: imageFileFilter,
};
//# sourceMappingURL=Multer.config.js.map