const naSexta = (estaChovendo) => {
    return new Promise((naoTaChovendo, taChovendo) => {
        setTimeout(() => {
            if (estaChovendo) {
                taChovendo(new Error('Entrando em hibernação...'))
            } else {
                naoTaChovendo('Partiu pescar!')
            }
        }, 2000)
    })
} 

for (bool of [false, true]) {
    naSexta(bool)
    .then((msg) => {
        console.log(msg)
        console.log(':)')
    })
    .catch((error) => {
        console.log(error)
        console.log(':(')
    })
    .finally(() => {
        console.log('Aqui não tem tempo ruim!')
    })
}
