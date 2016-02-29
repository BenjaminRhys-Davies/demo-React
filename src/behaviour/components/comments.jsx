'use strict';

const _ = require('lodash');
const React = require('react');
const Comment = require('./comment.jsx');
const CommentsStore = require('../stores/commentsStore');

const Comments = React.createClass({

    displayName: 'Comments',

    getState () {
        return { comments: CommentsStore.getComments() };
    },

    getInitialState () {
        return this.getState();
    },

    _onChange () {
        this.setState(this.getState());
    },

    componentDidMount () {
        CommentsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount () {
        CommentsStore.removeChangeListener(this._onChange);
    },

    render () {
        return (
            <div className='comments'>
                <h3 className='comments__heading'>Comments ({ this.state.comments.length})&#x200E;</h3>
                <ol>
                    { _.map(this.state.comments, (comment, index) => <Comment key={ comment.date + index } {...comment} />) }
                </ol>
            </div>
        );
    }

});

module.exports = Comments;
