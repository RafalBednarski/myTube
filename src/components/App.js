import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube.js';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount = () => {
        this.onTermSubmit('news');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term   //q=query, term=argument STATE forwarded from SearchBar 
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelected = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
                        </div>   
                    </div>     
                </div>             
            </div>
        )
    }
}

export default App;