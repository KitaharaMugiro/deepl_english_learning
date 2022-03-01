import { Howl, Howler } from 'howler';
export class SoundPlayer {
    baseUrl = "https://planmaker.s3-ap-northeast-1.amazonaws.com/audio"
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
}