import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import TopBlog from './Top-blog';
// import SideBarBlog from './SideBarBlog';
import Posts from './Posts';
import Pagination from './Pagination';
const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    useEffect( () => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const indexOfLastPage = currentPage*postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
        return(
            <section className="blog-page-sec">                
                <div className="container">
                    <div className="blog-page-in">
                        {/* <div className="blog-list-bottom"> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="blog-list-row">                                        
                                            <Posts posts={currentPosts} loading={loading} />  
                                    </div>
                                </div>
                                {/* <SideBarBlog /> */}
                            </div>
                            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>                            
                        {/* </div> */}
                    </div>
                </div>
            </section>
        )
    
}

export default Blogs;