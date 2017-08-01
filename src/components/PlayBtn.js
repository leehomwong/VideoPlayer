import React from 'react';
class PlayBtn extends React{
    constructor(){
        super();
        this.state = {
            init:{
                autoPlay: true,
                volume: 1,
                fullScreen: false,
                time: 0,
            }
        };
    }
    componentDidMount(){

    }

    render(){
        return(
            <div>
                <div>
                    <span>ball</span>
                    <span>bar</span>
                </div>
                <div>
                    <span>play/pause</span>
                    <span>time</span>
                    <span>volume</span>
                    <span>fullscreen</span>
                </div>
            </div>
        )
    }

}