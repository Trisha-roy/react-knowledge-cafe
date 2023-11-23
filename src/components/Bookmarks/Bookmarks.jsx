import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {




    return (



        <div className='md:w-1/3 bg-gray-300 rounded-xl m-5 p-5'>
            <h2 className='text-2xl text-center mt-4'>Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
        </div>


    );
};

Bookmarks.propTypes={
    Bookmarks:PropTypes.array
}

export default Bookmarks;