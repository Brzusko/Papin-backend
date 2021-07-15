const path = require('path');
const fsp = require('fs').promises;

module.exports = {
    getImagesPath: async() => {
        const images = [];
        const imagesPath = path.resolve('./static');
        const dir = await fsp.readdir(imagesPath, {
            withFileTypes: true,
        });

        for await (const file of dir) {
            images.push(`/static/${file.name}`);
        }

        return images;
    },
}