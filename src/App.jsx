import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Tile from './components/Tile';
import { DebounceInput } from 'react-debounce-input';
import moment from 'moment';
import 'moment-timezone';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: null,
            loadingData: false,
            tiles: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            searchQuery: event.target.value,
            loadingData: true, 
        });

        this.queryFlickr();
    }

    updateQuery(val) {
        this.setState({
            searchQuery: val,
            loadingData: true, 
        })
    }

    async queryFlickr() {
        const encodedSearchQuery = encodeURIComponent(this.state.searchQuery)
        const response = await fetch(
             `https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne?tags=${encodedSearchQuery}&format=json&nojsoncallback=1`);

        const data = await response.json();

        this.setState({
            tiles: data.items
        })
    }

    render() {
        let tiles = this.state.tiles.map(image => {
            let authorRegexMatches = 
                image.author.match(/nobody@flickr.com \("(.+)"\)/);

            // 2019-10-04T20:43:02-08:00
            let dateTime = moment(
                image.date_taken,
                "YYYY-MM-DD[T]HH:mm:ssZZ",
            );
            // debugger;
            return <Tile 
                key={image.link}
                thumbnailAnchor={image.media ? image.media.m : null} 
                fullSizeImageAnchor={image.link}
                author={authorRegexMatches ? authorRegexMatches[1] : null}
                dateTaken={dateTime.format("ddd Do MMM YYYY, h:mm:ss a z")}
                tags={image.tags.split(' ')}
                title={image.title}
                onTagClick={this.updateQuery}
            />;
        });

        return (
            <div className="app">
                <div className="app-header">
                <img 
                    src={ logo }
                    className="app-logo"
                    alt="logo" />
                <h2>Welcome! Please use the search box below to search for images from Flickr</h2>

                <DebounceInput
                    className="input"
                    debounceTimeout={150}
                    onChange={ this.handleChange }
                    placeholder="Search here..."
                />
            </div> 

            { 
                this.state.searchQuery && this.state.searchQuery.length < 5 ?
                <div className="tile-container">
                    {tiles}
                </div> : <ErrorMessage />
            }
            </div>
        );
    }
}

export default App;