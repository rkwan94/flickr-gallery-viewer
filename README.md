# Brief

# Implementation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I simply used CRA as a template to get a nice and simple setup for a basic React App with standard file structure and some base components.

## Styled Components

Instead of using conventional CSS I've opted to use [Styled Components](https://styled-components.com/). I've used it before in the past and found that it helps create self-contained components with declarative styling very easily. Typically other FE's like to use SASS, but I prefer using this library as it means I don't need to worry about a post-processor for my SASS files. For more advanced styling techniques like responsive design I've used conventional CSS stylesheets.

## Debouncing

I'm using a library `react-debounce-input` to implement debouncing for the search functionality of this application. Debouncing is quite common for inputs, especially when changes result in network requests. I'm using debouncing here as a soft form of rate-limiting.

## CORS Issues with Flickr API

Despite being an open API, the Flickr public feed doesn't seem to support cross-origin requests. One way around this is to use [JSONP](https://blog.logrocket.com/jsonp-demystified-what-it-is-and-why-it-exists/), however I didn't have much success implementing that for this application.

Instead, I followed the article listed [here](https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9#:~:text=The%20cors-anywhere%20server%20is,server%20that%20responds%20with%20data) on more simplistic techniques for dealing with such issues. I've opted with using the second method, which uses a popular public proxy which has CORS support. In an ideal world, I would've made a quick proxy server myself which can relay requests between this client and the Flickr public API.

Please note that this public proxy has had some intermittent issues with availability (see [here](https://github.com/Rob--W/cors-anywhere/issues/301)). If you are experiencing access issues you may need to remove the use of the proxy and install this [plugin](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US) which bypasses CORS checks just for the purposes of this demonstration.