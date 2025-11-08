import './VideoEmbed.css';

interface VideoEmbedProps {
  url: string;
  title?: string;
  platform?: 'youtube' | 'vimeo' | 'tiktok';
}

const VideoEmbed = ({ url, title = 'Video', platform = 'youtube' }: VideoEmbedProps) => {
  const getEmbedUrl = () => {
    if (platform === 'youtube') {
      // Convert YouTube watch URL to embed URL
      const videoId = url.split('v=')[1] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (platform === 'vimeo') {
      const videoId = url.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}`;
    } else if (platform === 'tiktok') {
      return url;
    }
    return url;
  };

  return (
    <div className="video-embed">
      <div className="video-wrapper">
        <iframe
          src={getEmbedUrl()}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
