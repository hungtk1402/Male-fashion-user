import './Blog.css'
import Blog1 from '../../../img/blog/blog-1.jpg'
import Blog2 from '../../../img/blog/blog-2.jpg'
import Blog3 from '../../../img/blog/blog-3.jpg'
import Blog4 from '../../../img/blog/blog-4.jpg'
import Blog5 from '../../../img/blog/blog-5.jpg'
import Blog6 from '../../../img/blog/blog-6.jpg'
import Blog7 from '../../../img/blog/blog-7.jpg'
import Blog8 from '../../../img/blog/blog-8.jpg'
import Blog9 from '../../../img/blog/blog-9.jpg'
import Banner from '../../../img/breadcrumb-bg.jpg'
import Calendar from '../../../img/calendar.png'
import { Link } from 'react-router-dom'

const blogItem = [
    { id: 1, image: Blog1, title: 'What Curling Irons Are The Best Ones', date: '16 February 2020' },
    { id: 2, image: Blog2, title: 'Eternity Bands Do Last Forever', date: '21 February 2020' },
    { id: 3, image: Blog3, title: 'The Health Benefits Of Sunglasses', date: '28 February 2020' },
    { id: 4, image: Blog4, title: 'Aiming For Higher The Mastopexy', date: '16 February 2020' },
    { id: 5, image: Blog5, title: 'Wedding Rings A Gift For A Lifetime', date: '21 February 2020' },
    { id: 6, image: Blog6, title: 'The Different Methods Of Hair Removal', date: '28 February 2020' },
    { id: 7, image: Blog7, title: 'Hoop Earrings A Style From History', date: '16 February 2020' },
    { id: 8, image: Blog8, title: 'Lasik Eye Surgery Are You Ready', date: '21 February 2020' },
    { id: 9, image: Blog9, title: 'Lasik Eye Surgery Are You Ready', date: '28 February 2020' },
]

const BlogPage = () => {
    return (
        <>
            <section className='breadcrumb-blog set-bg'>
                <img src={Banner} alt='' className="breadcrumb-img" />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Our Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog spad'>
                <div className='container'>
                    <div className='row'>
                        {blogItem.map(blog => (
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

export default BlogPage