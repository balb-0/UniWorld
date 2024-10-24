export function temporizador (falaAtual, scene, texto, numeroFala) {
    setTimeout (() => {
        falaAtual = scene.add.text(750, 860, texto, {
            fontFamily: 'Open Sans',
            fontSize: 28,
            color: '#000000',
            align: 'center',
            wordWrap: { width: 450 }
        }).setOrigin(0.5)
        setTimeout(() => {
            falaAtual.destroy()
        }, 3000)
        return falaAtual
    }, 3000*(numeroFala - 1))
}