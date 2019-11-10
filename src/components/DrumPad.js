import React from 'react';

class DrumPad extends React.Component {
    componentDidMount() {
        console.log(this.audio);
        document.addEventListener('keydown', this.handleKeyDown);
        window.focus();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    playAudio = () => {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);

    }

    handleKeydown = key => {
        if(key.keyCode === this.props.letter.charCodeAt()){
            this.playAudio();
        }
    }

    handleClick = () => {
        this.playAudio();
    }

    render() {
        return (
            <div
                classname='drum-pad'
                id={this.props.id}
                onClick={this.handleClick}
            >
                <h1>{this.props.letter}</h1>

                <audio id={this.props.letter}
                        className='clip'
                        src={this.props.src}
                        ref={ref => this.audio = ref}
                />
            </div>
        );
    }
}

export default DrumPad;