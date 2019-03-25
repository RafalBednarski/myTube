import axios from 'axios';

const KEY = 'AIzaSyDjGZjsCpGXqNvQ1VSqYDF6-TYcXxrGxuQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        'part': 'snippet',
        'q': 'surfing',
        'type': '',
        maxResult: 5,
        key: KEY
    }
})