"use client"

import Masonry from "react-masonry-css"
import VimeoEmbed from "../components/vimeo-embed"
import './VideoGrid.css'

export default function VideoGrid({ videos }: { videos: any[] }) {
  const breakpointColumnsObj = {
    default: 2,
    1024: 2,
    768: 2,
    480: 1, // só 1 no mobile
  }
  

  return (
    <section className="video-wrap">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto" // grid container
        columnClassName="pl-4 space-y-4" // cada coluna
      >
        {videos.map((video: any) => (
          <div key={video.uri}>
            <VimeoEmbed
              videoId={video.uri.split("/").pop()}
              title={video.name}
            />
          </div>
        ))}
      </Masonry>
    </section>
  )
}
