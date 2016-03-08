'use strict';

const React = require('react');
const CommentsStore = require('../stores/commentsStore');

const NewComment = React.createClass({

  getInitialState () {
    return {
      user: 'davey',
      comment: ''
    };
  },

  _addComment (e) {
    const { user, comment } = this.state;

    CommentsStore.addComment({
      user: {
        link: '#/user/' + user,
        name: user,
        type: user !== 'anon' ? 'current' : 'anon'
      },
      date: (new Date()).toISOString(),
      comment
    });

    e.preventDefault();
  },

  _setUser (e) {
    this.setState({ user: e.target.value });
  },

  _setComment (e) {
    this.setState({ comment: e.target.value });
  },

  render () {
    return (
      <form className='newcomment' role='aside' onSubmit={ this._addComment }>
        <h3 className='newcomment__heading'>New</h3>
        <fieldset className='newcomment__group'>
          <legend className='newcomment__legend'>Identity</legend>
          <label className='newcomment__label'
          htmlFor='user'>user</label>
          <select id='user'
            className='newcomment__user'
            defaultValue={ this.state.user }
            onChange={ this._setUser }
            value='davey'>
            <option value='davey'>Me (davey)</option>
            <option value='anon'>Anon</option>
          </select>
        </fieldset>
        <fieldset className='newcomment__group'>
          <legend className='newcomment__legend'>Comment</legend>
          <label className='newcomment__label'
            htmlFor='comment'>comment</label>
            <input id='comment'
            className='newcomment__comment'
            type='text'
            defaultValue={ this.state.comment }
            onChange={ this._setComment } />
        </fieldset>
        <input className='newcomment__submit'
        type='submit'
        value='add comment' />
      </form>
      );
  }

});

module.exports = NewComment;
