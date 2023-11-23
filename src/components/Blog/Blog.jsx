import PropTypes from 'prop-types'; 
import Icon from '../../assets/images/Frame.svg'

const Blog = ({blog,handleBookmark,handleRead}) => {

    const {title,cover,author,author_img,read_times,hashtags,posted_date}=blog


    return (

        <div className='mb-20 space-y-4'>



            <img className='w-full' src={cover}></img>



            <div className='flex justify-between'>

                <div className='flex'>
                <img className='w-10 h-10 rounded-3xl' src={author_img}></img>

                <div>
                    <h2 className='font-bold ml-5'>{author}</h2>
                    <p className='ml-5 text-gray-500 text-sm'>{posted_date}</p>
                </div>

                </div>


                <div className='flex'>
                <span>{read_times} min read </span>


                <div>
                <img onClick={()=>handleBookmark(blog)} src={Icon}></img>
                </div>

                
                </div>
            </div>


            <h4 className='text-4xl font-bold underline'>{title}</h4>
            <p>

                {
                    hashtags.map((hashtag,index)=><span key={index}> <a href=''> #{hashtag} </a> </span>)
                }
            </p>

            <button 
            onClick={()=>handleRead(read_times)}
            className='text-purple-600 font-bold underline'>
            Mark as read
            </button>

        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func,
    handleRead:PropTypes.func
}

export default Blog;