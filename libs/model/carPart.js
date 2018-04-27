var mongoose = require('mongoose'),

    Schema = mongoose.Schema,

    CarPart = new Schema({
        carId: {
            type: Number,
            unique: true,
            required: true
        },
        liveryId: {
            type: Number,
            unique: true
        },
        colorId: {
            type: Number,
            unique: true
        },
        engineId: {
            type: Number,
            unique: true
        },
        camShaftId: {
            type: Number,
            unique: true
        },
        crankShaftId: {
            type: Number,
            unique: true
        },
        pistonsId: {
            type: Number,
            unique: true
        },
        turboId: {
            type: Number,
            unique: true
        },
        intercoolerId: {
            type: Number,
            unique: true
        },
        oilCoolerId: {
            type: Number,
            unique: true
        },
        wheelSetId: {
            type: Number,
            unique: true
        },
        fuelPumpId: {
            type: Number,
            unique: true
        },
        fuelInjectorsId: {
            type: Number,
            unique: true
        },
        ecuId: {
            type: Boolean,
            unique: true
        },
        fuelCellId: {
            type: Number,
            unique: true
        },
        radiatorId: {
            type: Number,
            unique: true
        },
        transmissionId: {
            type: Number,
            unique: true
        },
        driveShaftId: {
            type: Number,
            unique: true
        },
        differentialId: {
            type: Number,
            unique: true
        },
        brakeCaliperId: {
            type: Number,
            unique: true
        },
        brakeRotorId: {
            type: Number,
            unique: true
        },
        bodyKitId: {
            type: Number,
            unique: true
        },
        lastUpdated: {
            type: Date,
            unique: true
        },
        creationDate: {
            type: Date,
            default: Date.now,
            required: true
        }
    });