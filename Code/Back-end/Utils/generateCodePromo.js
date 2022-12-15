const generateCodePromo = () => {
    const code = '56786'
    let codePromo = '';
    for (let i = 0; i < code.length; i++) {
        codePromo += code.charAt(Math.floor(Math.random() * code.length));
    }
    return Number(codePromo);
}
module.exports = generateCodePromo