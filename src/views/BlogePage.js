import React, { useContext, useEffect, useState } from 'react';
import imgslide from '../image/slide1.1.jpg'
import HeaderOfPage from '../components/shared/HeaderOfPage'
import Breadcrumbs from '../components/shared/Breadcrumbs';
import BlogContainer from '../components/blog';
import AppContext from '../utilities/Functions/AppContext';
const BlogePage = () => {
    const [data, setData] = useState([])
    const [CurrentPage,setCurrentPage]= useState(0)
    const [limit,setLimit]= useState(5)
    
    const {searchValue,IsSearch,setIsSearch } = useContext(AppContext);
    useEffect(() => {
        fetch(`https://oasis-backend.onrender.com/api/v1/blogs?limit=${limit}&page=${CurrentPage}`, {})
            .then((res) => res.json())
            .then(data => {
                setData(data.data)
            })
    }, [CurrentPage,limit])

    const SearchDataFromDB= (search)=>{
        fetch(`https://oasis-backend.onrender.com/api/v1/find?search=${search}`, {})
        .then((res) => res.json())
        .then(data => {
            setData(data.data)
            setIsSearch(false)

        })
    }
    
    if (IsSearch) {
        SearchDataFromDB(searchValue)
    }
    return (
        <div>
             <HeaderOfPage img={imgslide}><h1 className='border-b-2'>BLOG</h1></HeaderOfPage>
             <Breadcrumbs pageName="Blog"/>
             <BlogContainer data={data} setCurrentPage={setCurrentPage} limit={limit}/>
            
        </div>
    );
};

export default BlogePage;