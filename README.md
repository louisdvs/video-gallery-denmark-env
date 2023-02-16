# Offline Video Kiosk Display

This repo is set up specifically for the six seasons project at the denmark environment center.
It displays a 3x2 grid of videos to display the project in an offline environment (e.g. at the shop or visitor center).

It was built on create react app for speed, and because we don't have any performance concerns running locally.

You could repurpose this by adding two directories in the `/public` dir:

- `/videos` a set of `.mp4` files
-  `/thumb` a set of `.jpeg` images with a 1:1 video->thumbnail.

And updating `videos` constant in [`src/config.js`](/src/config.js)

## Video files

To get this project running, you will need to add all video files under `/public/videos`
Video names must match the thumbnails images e.g. Durak.jpeg -> Durak.mp4

## Building the project 

To share this project, install `yarn` (google it) then run the commands:

`yarn`

followed by:

`yarn build`

Then opening the index.html file in the build directory will run the page. 
We have run this on a guest account on a USB drive (to ensure that files aren't deleted between logins).

Check out the docs to learn more about [Create React App](https://github.com/facebook/create-react-app).

