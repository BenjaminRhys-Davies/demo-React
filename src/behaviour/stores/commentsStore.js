'use strict';

const _ = require('lodash');
const Dispatcher = require('../dispatchers/dispatcher');
const Base = require('./base');

const CommentsStore = _.extend({}, Base, {

    comments: [
        {
            user: { 
                link:'#/user/daveyjones',
                name: 'Davey Jones',
                type: 'current',
            },
            date: '2016-04-17T17:00:00.000Z',
            comment: 'Cackle fruit jolly boat black spot stern barkadeer Spanish Main gun scallywag piracy quarter. Take a caulk port Letter of Marque ho provost lookout coffer sutler spike Sail ho. Ho prow port topgallant strike colors gangplank provost squiffy interloper Jack Ketch.',
        },
        {
            user: { 
                link:'#/user/davey',
                name: 'Davey',
            },
            date: '2016-03-17T17:00:00.000Z',
            comment: 'Davey davey davey davey, davey. Davey davey. Davey. Davey, davey. Davey?',
        },
        {
            user: { 
                name: 'Tony Soprano'
            },
            date: '2016-03-13T17:00:00.000Z',
            comment: 'Crazy nizzle. Mammasay mammasa mamma oo sa tellizzle bow wow wow, pretizzle dizzle, mattizzle ma nizzle, eleifend bizzle, nunc. Crunk suscipit. Yo dizzle my shizz sizzle purus.',
        },
        {
            user: { 
                link: '#/user/samuel',
                name: 'Samuel L Jackson',
            },
            date: '2016-03-2T00:00:00.000Z',
            comment: 'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
        },
        {
            user: { 
                link: '#/user/hodor',
                name: 'Hodor',
            },
            date: '2016-02-14T17:00:00.000Z',
            comment: 'Hodor, hodor hodor hodor… Hodor hodor hodor - hodor. Hodor. Hodor hodor hodor hodor?! Hodor! Hodor hodor, hodor hodor hodor; hodor hodor; hodor hodor?',
        },
    ],

    getComments () {
        return this.comments;
    },

    addComment (comment) {
        this.comments.unshift(comment);
        this.emitChange();
    },

});

module.exports = CommentsStore;
