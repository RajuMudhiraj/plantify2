const User = require('./User');
const FlowBar = require('./FlowBar');
const AddPlace = require('./AddPlace');
const Nursery = require('./Nursery');
const Seedling = require('./Seedling');
const SeedlingOrdersPlaced = require('./SeedlingOrdersPlaced');
const Plant = require('./Plant')


User.hasMany(AddPlace)
User.hasMany(Nursery)
User.hasMany(FlowBar)
User.hasMany(SeedlingOrdersPlaced)

AddPlace.belongsTo(User)
AddPlace.hasOne(FlowBar)

Nursery.hasMany(Seedling)
Nursery.belongsTo(User)

FlowBar.belongsTo(AddPlace)
FlowBar.belongsTo(User)

Seedling.belongsTo(Nursery)
Seedling.hasOne(SeedlingOrdersPlaced)

SeedlingOrdersPlaced.belongsTo(User)
SeedlingOrdersPlaced.belongsTo(Seedling)