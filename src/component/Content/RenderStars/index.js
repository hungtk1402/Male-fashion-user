const RenderStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;  // Kiểm tra nếu là 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            <div className="rating">
                {Array(fullStars).fill(<i className="fas fa-star"></i>)}
                {halfStar && <i className="fas fa-star-half-alt"></i>}
                {Array(emptyStars).fill(<i className="far fa-star"></i>)}
            </div>
        </>
    );
};
export default RenderStars