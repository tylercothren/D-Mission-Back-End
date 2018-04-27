var mongoose = require('mongoose'),

    Schema = mongoose.Schema,

    Car = new Schema({
        tokenId: {
            type: Number,
            unique: true,
            required: true
        },
        modelName: {
            type: String,
            unique: true,
            required: true
        },
        manufacturerName: {
            type: Number,
            unique: true,
            required: true
        },
        ownerUserId: {
            type: Number,
            unique: true,
            required: true
        },
        modelId: {
            type: Number,
            unique: true,
            required: true
        },
        fuelAmount: {
            type: Number,
            unique: true,
            required: true
        },
        horsePower: {
            type: Number,
            unique: true,
            required: true
        },
        torque: {
            type: Number,
            unique: true,
            required: true
        },
        acceleration: {
            type: Number,
            unique: true,
            required: true
        },
        angle: {
            type: Number,
            unique: true,
            required: true
        },
        wheelAngle: {
            type: Number,
            unique: true,
            required: true
        },
        speed: {
            type: Number,
            unique: true,
            required: true
        },
        carState: {
            type: Number,
            unique: true,
            required: true
        },
        clutch: {
            type: Boolean,
            unique: true,
            required: true
        },
        rpm: {
            type: Number,
            unique: true,
            required: true
        },
        rpmDx: {
            type: Number,
            unique: true,
            required: true
        },
        rpmFloor: {
            type: Number,
            unique: true,
            required: true
        },
        engineState: {
            type: Number,
            unique: true,
            required: true
        },
        maxSpeed: {
            type: Number,
            unique: true,
            required: true
        },
        redline: {
            type: Number,
            unique: true,
            required: true
        },
        brake: {
            type: Number,
            unique: true,
            required: true
        },
        suspension: {
            type: Number,
            unique: true,
            required: true
        },
        currentGear: {
            type: Number,
            unique: true,
            required: true
        },
        lastUpdated: {
            type: Date,
            unique: true,
            required: true
        },
        creationDate: {
            type: Date,
            default: Date.now
        }
    });