import "./styles.css"

import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-video.css"

import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgVideo from "lightgallery/plugins/video"

import { videos } from "./config"

export default function App() {
  const onInit = () => {
    console.log("lightGallery has been initialized")
  }

  return (
    <div
      className="App"
      style={{
        marginTop: 80,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          rowGap: "10px",
          columnGap: 20,
          marginBottom: 40,
        }}
      >
        <img
          src="./dec-logo.jpeg"
          alt="logo"
          style={{ height: 150, marginLeft: 100 }}
        />
        <h1
          style={{
            flex: 1,
            fontSize: "4rem",
            textAlign: "center",
            font: "bold 80px Avenir",
            color: "#fdd637",
            textShadow: "2px 2px 3px #000000c9",
          }}
        >
          Six Seasons Project
        </h1>
        <img src="./lottery-west.jpeg" alt="logo" style={{ height: 150 }} />
      </div>
      <div className="galleryContainer">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgVideo]}
          licenseKey={process.env.REACT_APP_LIGHT_GALLERY_KEY}
        >
          {videos.map((video) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              key={video}
              data-lg-size="1920-1080"
              data-video={`{"source": [{"src":"./video/${video}.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "playsinline": true, "controls": true}}`}
              data-poster={`./thumb/${video}.jpg`}
              data-sub-html={`<h4>${video} Season</h4>`}
            >
              <img
                width="600"
                height="320"
                style={{ margin: 10 }}
                className="img-responsive"
                src={`./thumb/${video}.jpg`}
                alt={`${video} Season`}
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  )
}
