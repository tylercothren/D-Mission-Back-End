var mongoose = require('mongoose'),

    Schema = mongoose.Schema,

    Matchbox = new Schema({
        ownerUserId: {
            type: Number,
            unique: true,
            required: true
        },
        tokenId: {
            type: Number,
            unique: true,
            required: true
        },
        matchboxSeriesId: {
            type: Number,
            unique: true,
            required: true
        },
        creationDate: {
            type: Date,
            default: Date.now
        }
    });

matchbox.methods.openMatchbox = function () {
    return null;
};

matchbox.methods.transferMatchbox = function () {
    return null;
};
