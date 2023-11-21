import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {

    const {title,cover}=blog
    return (
        <div>
            <img src={cover}></img>
            <h4 className='text-4xl'>{title}</h4>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;