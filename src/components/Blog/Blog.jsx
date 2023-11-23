import PropTypes from 'prop-types'; 
import Icon from '../../assets/images/Frame.svg'

const Blog = ({blog,handleBookmark}) => {

    const {title,cover,author,author_img,read_times,hashtags,posted_date}=blog


    return (

        <div className='mb-20'>



            <img className='w-96' src={cover}></img>



            <div className='flex justify-between'>

                <div className='flex'>
                <img className='w-14 h-14 rounded-3xl' src={author_img}></img>

                <div>
                    <h2 className='text-2xl'>{author}</h2>
                    <p>{posted_date}</p>
                </div>

                </div>


                <div className='flex'>
                <span>{read_times} min read </span>


                <div>
                <img onClick={()=>handleBookmark(blog)} src={Icon}></img>
                </div>

                
                </div>
            </div>


            <h4 className='text-4xl'>{title}</h4>
            <p>

                {
                    hashtags.map((hashtag,index)=><span key={index}> <a href=''> #{hashtag} </a> </span>)
                }
            </p>


        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func
}

export default Blog;