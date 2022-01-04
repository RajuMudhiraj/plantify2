const User = require('./User');
const FlowBar = require('./FlowBar');
const AddPlace = require('./AddPlace');
const Nursery = require('./Nursery');
const Seedling = require('./Seedling');
const SeedlingOrdersPlaced = require('./SeedlingOrders');
const Plant = require('./Plant')
const SeedlingOrders = require('./SeedlingOrders');



User.hasMany(AddPlace)
User.hasMany(Nursery)
User.hasMany(FlowBar)
User.hasMany(SeedlingOrders)

AddPlace.belongsTo(User)
AddPlace.hasOne(SeedlingOrders)
AddPlace.hasOne(FlowBar)
AddPlace.hasOne(Plant)

Nursery.hasMany(Seedling)
Nursery.belongsTo(User)

FlowBar.belongsTo(AddPlace)
FlowBar.belongsTo(User)

Seedling.belongsTo(Nursery)
Seedling.hasOne(SeedlingOrders)


SeedlingOrders.belongsTo(Seedling)
SeedlingOrders.belongsTo(User)
SeedlingOrders.belongsTo(AddPlace)

Plant.belongsTo(AddPlace)