const Jimp = require('jimp');

async function resizeImage(inputPath, outputPath, width, height) {
    try {
        const image = await Jimp.read(inputPath);
        await image.resize(width, height);
        await image.writeAsync(outputPath);
        console.log(`Изображение успешно изменено: ${outputPath}`);
    } catch (error) {
        console.error(`Ошибка при изменении размеров изображения: ${error.message}`);
        throw error;
    }
}

module.exports = {
    resizeImage,
};
