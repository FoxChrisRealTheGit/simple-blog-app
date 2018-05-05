import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { fetchPost, deletePost } from "../ducks/actions";
class PostsShow extends React.Component {
    componentDidMount() {

        this.props.fetchPost(this.props.match.params.id);

    }
    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, ()=>{
            this.props.history.push("/")
        })
    }
    render() {
        const { post } = this.props
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button
                    onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>
        )
    }
}
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);