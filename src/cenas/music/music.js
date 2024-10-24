/* Define uma função chamada "music" que será exportada para outros arquivos. Com parâmetros os 'scene' que
 representa, a cena onde a música será reproduzida, e music, que é o nome da música a ser reproduzida.*/
export function music (scene, music) {

    /*Este comando para todas as reproduções de som que estão ocorrendo na cenas.*/
    scene.sound.stopAll()

    // Define a lógica para determinar quando a música deve começar a tocar e quais parâmetros são necessários para isso.
    if (!scene.playingSong) {
        scene.menuSong = scene.sound.add(music, {loop: true});
        scene.menuSong.play();
        scene.playingSong = true;
    }
}