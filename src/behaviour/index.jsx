const React = require('react');
const Comments = require('./components/comments.jsx');

React.render(<section>
    <Comments key='comments' />
</section>, document.getElementById('main'));
