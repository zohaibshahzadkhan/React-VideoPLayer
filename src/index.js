import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';

import AppTheme from "./darkbaseTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './components/searchFile';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import _ from 'lodash'; 
import VideoPlayer from './components/videoPlayer';
const API_Key='AIzaSyAtJXMp9JzzP53WYwHLBeN07ZDTM5x9Fn0';

class App extends Component {
 
 constructor(props)
    {
        super(props);
        this.state={
            videos:[],
            selectedvideo:null
        }
        this.videoSearch('React/Redux');
    }
 
 videoSearch(term)
 {
     YTSearch(
                {key:API_Key,term:term},videos=>this.setState({
                  videos,
                  selectedvideo:videos[0] })
                //Above line is same as this.setstare({videos:videos})
            );
   
 }
 
  render() {
    const videosearch=_.debounce((term)=>{this.videoSearch(term)},300)
    return (
      <div className="App">
         <AppBar title="Fast Video Search Application" />
          <SearchBar onSearchTermChange={videosearch} />  <br />
          <VideoPlayer videos={this.state.selectedvideo}/>
          <VideoList
            onvideoselect={selectedvideo=>{this.setState({selectedvideo})}}
           videos={this.state.videos}/>
      </div>
    );
  }
}


ReactDOM.render(
  <MuiThemeProvider  >
  <App />
  </MuiThemeProvider>, document.getElementById('root'));
