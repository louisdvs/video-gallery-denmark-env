import "./styles.css"

import LightGallery from "lightgallery/react"

// import styles
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-video.css"

import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import lgVideo from "lightgallery/plugins/video"

const videos = ["Birak", "Bunuru", "Djeran", "Djilba", "Kambarang", "Makuru"]

export default function App() {
  const onInit = () => {
    console.log("lightGallery has been initialized")
  }

  return (
    <div
      className="App"
      style={{
        marginTop: 100,
      }}
    >
      <div className="galleryContainer">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgVideo]}
        >
          {videos.map((video) => (
            <a
              key={video}
              data-lg-size="1280-720"
              data-video={`{"source": [{"src":"/video/${video}.mp4", "type":"video/mp4"}], "attributes": {"preload": false, "playsinline": true, "controls": true}}`}
              data-poster={`/video/thumb/${video}.jpg`}
              data-sub-html={`<h4>'${video} Season</h4>`}
            >
              <img
                width="600"
                height="320"
                style={{ margin: 10 }}
                class="img-responsive"
                src={`/thumb/${video}.jpg`}
                alt={`${video} Season`}
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  )
}
