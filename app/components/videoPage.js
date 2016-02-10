'use strict';

import React, {
    StyleSheet,
    Component,
    View,
    TouchableOpacity
} from 'react-native';
import Video from 'react-native-video';

var isTab = true;

class VideoPage extends Component {
    constructor(props) {
        super(props);
        if(props.uri) {
          this.uri = props.uri;
          isTab = false;
        } else {
          this.uri = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4";
        }
        this.paused = true;
    }


    render() {
        return (

            <View style = {styles.container}>
                <Video source = {{uri: this.uri}}
                    rate = {1.0}
                    volume = {0.0}
                    muted = {false}
                    paused = {this.paused}
                    resizeMode = "contain"
                    repeat = {true}
                    style = { isTab ? styles.fullScreenTab : styles.fullScreen }
                    controls = {true}/>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    container: {
        flex: 1

    },
    fullScreenTab: {
      position: 'absolute',
      top: 50,
      left: 0,
      bottom: 55,
      right: 0
    },
    fullScreen: {
      position: 'absolute',
      top: 50,
      left: 0,
      bottom: 0,
      right: 0

    },
});

module.exports = VideoPage
