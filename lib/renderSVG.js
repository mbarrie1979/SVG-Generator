function renderSVG(shapeInfo, textInfo) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 ${shapeInfo}
 ${textInfo}
    </svg>`
};

module.exports = renderSVG