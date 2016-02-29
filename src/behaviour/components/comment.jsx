'use strict';

const React = require('react');
const classnames = require('classnames');

const formatDateString = (dateStr) => (new Date(dateStr)).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

const Comment = React.createClass({

    displayName: 'Comment',

    propTypes: {
        user: React.PropTypes.shape({
            link: React.PropTypes.string,
            name: React.PropTypes.string.isRequired,
            type: React.PropTypes.oneOf(['current', 'anon']),
        }),
        date: React.PropTypes.string,
        comment: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string),
        ]),
    },

    _renderAuthor () {
        const { name, link } = this.props.user;
        const author = <cite>{ name }</cite>;

        return name ? (
            <h3 key='author' className='comment__author'>
                { link ? <a href={ link } className='comment__authorlink'>{ author }</a> : author }
            </h3>
        ) : null;
    },

    _renderDateTime () {
        const { date } = this.props;
        return (
            <div key='date' className='comment__date'>
                <time dateTime={ date }>{ formatDateString(date) }</time>
            </div>
        );  
    },

    _renderComments () {
        return (
            <p key='comment'>{ this.props.comment }</p>
        );
    },

    render () {
        const { link, type } = this.props.user;
        const quoteProps = {
            className: 'comment__quote',
            cite: link,
        }
        const classes = classnames('comment', {
            'comment--anonuser': type === 'anon',
            'comment--currentuser': type === 'current',
        });

        return (
            <li key='comment__item' className={ classes }>
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
