const RenderStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="rating">
            {Array.from({ length: fullStars }, (_, i) => (
                <i key={`full-${i}`} className="fas fa-star"></i>
            ))}
            {halfStar && <i className="fas fa-star-half-alt"></i>}
            {Array.from({ length: emptyStars }, (_, i) => (
                <i key={`empty-${i}`} className="far fa-star"></i>
            ))}
        </div>
    );
};

export default RenderStars;
