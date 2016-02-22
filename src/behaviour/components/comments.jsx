'use strict';

const _ = require('lodash');
const React = require('react');
const Comment = require('./comment.jsx');

const Comments = React.createClass({

    displayName: 'Comments',

    mixins: [],

    _getComments () {
        return [
            {
                currentuser: true,
                user: { 
                    link:'#/user/daveyjones',
                    name: 'Davey Jones',
                },
                date: {
                    timestamp: '2016-03-20T16:55:00.000Z',
                    friendly: '5 minutes ago',
                },
                comment: 'Cackle fruit jolly boat black spot stern barkadeer Spanish Main gun scallywag piracy quarter. Take a caulk port Letter of Marque ho provost lookout coffer sutler spike Sail ho. Ho prow port topgallant strike colors gangplank provost squiffy interloper Jack Ketch.',
            },
            {
                user: { 
                    link:'#/user/davey',
                    name: 'Davey',
                },
                date: {
                    timestamp: '2016-03-17T17:00:00.000Z',
                    friendly: '3 days ago',
                },
                comment: 'Davey davey davey davey, davey. Davey davey. Davey. Davey, davey. Davey?',
            },
            {
                user: { 
                    name: 'Tony Soprano'
                },
                date: {
                    timestamp: '2016-03-13T17:00:00.000Z',
                    friendly: '1 week ago',
                },
                comment: 'Crazy nizzle. Mammasay mammasa mamma oo sa tellizzle bow wow wow, pretizzle dizzle, mattizzle ma nizzle, eleifend bizzle, nunc. Crunk suscipit. Yo dizzle my shizz sizzle purus.',
            },
            {
                user: { 
                    link: '#/user/samuel',
                    name: 'Samuel L Jackson',
                },
                date: {
                    timestamp: '2016-03-2T00:00:00.000Z',
                    friendly: '2nd March 2016',
                },
                comment: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
            },
            {
                user: { 
                    link: '#/user/hodor',
                    name: 'Hodor',
                },
                date: {
                    timestamp: '2016-02-14T17:00:00.000Z',
                    friendly: '14 February 2016',
                },
                comment: 'Hodor, hodor hodor hodor... Hodor hodor hodor - hodor. Hodor. Hodor hodor hodor hodor?! Hodor! Hodor hodor, hodor hodor hodor; hodor hodor; hodor hodor?',
            },
        ];
    },

    render () {
        return (
            <div className='comments'>
                <h2 className='comments__heading'>Comments (5)&#x200E;</h2>
                <ol>
                    { _.map(this._getComments(), (comment) => <Comment key={ comment.date.timestamp } {...comment} />) }
                </ol>
            </div>
        );
    }

});

module.exports = Comments;
