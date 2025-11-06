export default function Player() {
  return (
    <iframe
      data-testid="embed-iframe"
      className="border-radius:12px dark:bg-dark"
      src="https://open.spotify.com/embed/track/0FB5ILDICqwK6xj7W1RP9u?utm_source=generator"
      width="100%"
      height="200"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
