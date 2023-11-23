import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {




    return (



        <div className='md:w-1/3'>
        <div className='border-2 border-blue-500 w-full bg-sky-200 text-purple-800 h-14 mt-16 '>
            <h3 className='text-center mt-4 font-semibold'>Reading time: {readingTime}</h3>
        </div>
        <div className=' bg-gray-300 rounded-xl mt-10 p-5'>
            <h2 className='text-2xl text-center mt-4'>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index)=> <Bookmark key={index} bookmark={bookmark} ></Bookmark>)
            }
            </div>
        </div>


    );
};

Bookmarks.propTypes={
    Bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;