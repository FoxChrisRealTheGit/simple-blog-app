import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../ducks/actions";


class PostsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key="post.id">
                    {post.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <Link to="/posts/new">New Post</Link>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)