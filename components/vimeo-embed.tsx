export default function VimeoEmbed({ videoId, title }: { videoId: string, title: string }) {
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  )
}
