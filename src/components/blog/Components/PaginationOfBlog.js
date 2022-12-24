
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const PaginationOfBlog = ({ setCurrentPage ,limit}) => {
    const [pageCount, setPageCount] = useState(0)
    useEffect(() => {
        fetch('https://oasis-backend.onrender.com/api/v1/blogs/countBlog').then(data => data.json()).then(data => {
            const count = data.data;
            const pages = Math.ceil(count / limit)
            setPageCount(pages)

        });
    }, [])
    return (
        <>
            {/* <div className="bg-white sticky sm:flex items-center w-full sm:justify-between bottom-0 right-0 border-t border-gray-200 p-4">
                <div className="flex items-center mb-4 sm:mb-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center mr-2">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </a>
                    <span className="text-sm font-normal text-gray-500">Showing <span className="text-gray-900 font-semibold">1</span> of <span className="text-gray-900 font-semibold">{productCount}</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={(e) => setCurrentPage(e.selected)}
                        containerClassName={"btn-group "}
                        pageClassName={"btn"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"btn"}
                        previousLinkClassName={"btn"}
                        nextClassName={"btn"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"btn btn-disabled"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"btn btn-secondary"}
                    />
                </div>
            </div> */}
            <div className=' mt-9 flex justify-center'>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={(e) => setCurrentPage(e.selected)}
                    containerClassName={"btn-group"}
                    pageClassName={"px-3 py-1 flex items-center"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"btn btn-ghost "}
                    previousLinkClassName={"btn btn-primary"}
                    nextClassName={"btn btn-primary"}
                    nextLinkClassName={"page-link btn-ghost"}
                    breakClassName={"btn btn-disabled"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"btn btn-secondary"}
                />
            </div>
        </>
    );
};

export default PaginationOfBlog;