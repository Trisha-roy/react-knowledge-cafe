import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {




    return (



        <div className='md:w-1/3 bg-gray-300 rounded-xl m-5 p-5'>
        <div>
            <h3>Reading time: {readingTime}</h3>
        </div>
            <h2 className='text-2xl text-center mt-4'>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index)=> <Bookmark key={index} bookmark={bookmark} ></Bookmark>)
            }
        </div>


    );
};

Bookmarks.propTypes={
    Bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;