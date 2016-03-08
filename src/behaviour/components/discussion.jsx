'use strict';

const React = require('react');
const NewComment = require('./newcomment.jsx');
const Comments = require('./comments.jsx');

const Discussion = React.createClass({

  render () {
    return (
      <section className='discussion'>
        <h2 className='discussion__heading'>Discussion</h2>
        <NewComment />
        <Comments />
      </section>
      );
  }

});

module.exports = Discussion;
