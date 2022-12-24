import React from 'react';
import FollowMe from './FollowMe';
import LatestBlog from './Latest blog';

const BlogPageAside = () => {
    return (
        <aside>
            <div className='category w-full   bg-gray-100 min-h-[90vh] '>

                {/* letest blogs */}
               <LatestBlog/>
                {/* Follow Me */}
                <FollowMe/>
                
            </div>
        </aside>
    );
};

export default BlogPageAside;