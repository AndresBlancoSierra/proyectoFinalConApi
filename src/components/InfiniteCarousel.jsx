const InfiniteCarousel = ({ items, type = "image", renderItem }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="infinite-carousel">
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="carousel-slide">
            {renderItem ? (
              renderItem(item)
            ) : type === "video" && item.type === "video" ? (
              <video
                src={item.src}
                className="carousel-media"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={item.src}
                className="carousel-media"
                alt={item.alt || item.title || ""}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
