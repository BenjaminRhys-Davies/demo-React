'use strict';

const React = require('react');

const Comment = React.createClass({

    displayName: 'Comment',

    propTypes: {
        currentuser: React.PropTypes.bool,
        user: React.PropTypes.shape({
            link: React.PropTypes.string,
            name: React.PropTypes.string,
        }),
        date: React.PropTypes.shape({
            timestamp: React.PropTypes.string,
            friendly: React.PropTypes.string,
        }),
        comment: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
        ]),
    },

    _renderAuthor () {
        const { user } = this.props;
        const author = <cite>{ user.name }</cite>;

        return user.name ? (
            <h3 key='author' className='comment__author'>
                { user.link ? <a href={ user.link } className='comment__authorlink'>{ author }</a> : author }
            </h3>
        ) : null;
    },

    _renderDateTime () {
        const { date } = this.props;
        return (
            <div key='date' className='comment__date'>
                <time dateTime={ date.timestamp }>{ date.friendly }</time>
            </div>
        );  
    },

    _renderComments () {
        return (
            <p key='comment'>{ this.props.comment }</p>
        );
    },

    render () {
        const { user, currentuser } = this.props;
        const quoteProps = {
            className: 'comment__quote',
            cite: user.link,
        }
        const props = {
            className: 'comment' + (currentuser ? ' comment--currentuser' : '')
        };

        return (
            <li key='comment' {...props}>
                <blockquote {...quoteProps}>
                    { this._renderAuthor() }
                    { this._renderDateTime() }
                    { this._renderComments() }
                </blockquote>
            </li>
        );
    }

});

module.exports = Comment;
