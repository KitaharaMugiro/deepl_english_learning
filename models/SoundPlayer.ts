import { Howl, Howler } from 'howler';
export class SoundPlayer {
    baseUrl = "https://english.yunomy.com/static/audio"
    //baseUrl = "http://localhost:3000/static/audio"
    private play(filename: string) {
        const url = this.baseUrl + "/" + filename
        const sound = new Howl({
            src: [url]
        });
        sound.play();
    }

    playWhenSubmit() {
        this.play("decision42.mp3")
    }

    playWhenStart() {
        this.play("decision42.mp3")
    }

    playWhenLevelup() {
        //https://pocket-se.info/archives/1466/
        this.play("lvup2.mp3")
    }
}