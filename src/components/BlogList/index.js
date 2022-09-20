import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogsDetails={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
