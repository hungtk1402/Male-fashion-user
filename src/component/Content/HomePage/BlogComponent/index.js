import { Link } from 'react-router-dom'
import Blog1 from '../../../../img/blog/blog-1.jpg'
import Blog2 from '../../../../img/blog/blog-2.jpg'
import Blog3 from '../../../../img/blog/blog-3.jpg'
import Calendar from '../../../../img/calendar.png'

const BlogComponent = () => {
    const blogItem = [
        {id: 1, image: Blog1, title: 'What Curling Irons Are The Best Ones', date: '16 February 2020' },
        {id: 2, image: Blog2, title: 'Eternity Bands Do Last Forever', date: '21 February 2020' },
        {id: 3, image: Blog3, title: 'The Health Benefits Of Sunglasses', date: '28 February 2020' },
    ]

    return (
        <>
            <section className='latest spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section-title'>
                                <span>Latest News</span>
                                <h2>Fashion New Trends</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {blogItem.map((blog) => (
                            <div className='col-lg-4 col-md-6 col-sm-6' key={blog.id}>
                                <div className='blog__item'>
                                    <div className='blog__item__pic set-bg'>
                                        <img src={blog.image} alt='' />
                                    </div>
                                    <div className='blog__item__text'>
                                        <span><img src={Calendar} alt='' /> {blog.date}</span>
                                        <h5>{blog.title}</h5>
                                        <Link to='/blog'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogComponent