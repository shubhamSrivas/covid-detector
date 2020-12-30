import React, { Component } from 'react'
import Audio from './Audio';
class coughsound extends Component {
    render() {
        return (
            <div>
             <p> Click the microphone to start recording, cough 3 times, then click again to stop recording. </p>
                <Audio/>
            <p> Press the record button and say 'aaa' for as long as you can (i.e. same as the 'aaa' sound in the word 'far' or 'car').</p>
                <Audio/>
            <p> Press the record button and say 'eee' for as long as you can (i.e. same as the 'eee' sound in the word 'cheese' or 'feet').</p>
                <Audio/>
            <p> Press the record button and say 'ooo' for as long as you can (i.e. same as the 'ooo' sound in the word 'food' or 'boot').</p>
                <Audio/>
            <p> Click the microphone to start recording, count from 1 to 20, then click again to stop recording.</p>
                <Audio/>
            <p> Press the record button and say the alphabet from a to z (a b c d e f g h i j k l m n o p q r s t u v w x y z).</p>
                <Audio/>
            </div>
        )
    }
}

export default coughsound
