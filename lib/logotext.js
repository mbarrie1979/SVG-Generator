class LogoText {
    constructor(text, textColor) {
        this.text = text,
            this.textColor = textColor

    }
    render() {
        const { text, textColor } = this;
        const upperCaseText = text.toUpperCase();
        return `<text x="50%" y="52%" fill="${textColor}" font-size="30" font-family="Arial" text-anchor="middle" dominant-baseline="middle">${upperCaseText}</text>`
    }
}







module.exports = LogoText