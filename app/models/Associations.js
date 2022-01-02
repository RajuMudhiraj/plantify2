const User = require('./User');
const FlowBar = require('./FlowBar');
const AddPlace = require('./AddPlace');
const Nursery = require('./Nursery');
const Seedling = require('./Seedling');


User.hasMany(AddPlace)
AddPlace.belongsTo(User)

User.hasMany(Nursery)
Nursery.belongsTo(User)


FlowBar.hasOne(AddPlace)
AddPlace.belongsTo(FlowBar)

Nursery.hasMany(Seedling)
Seedling.belongsTo(Nursery)








// module.exports =  {User, Nursery, Seedling, SeedlingPhoto, Place, Plant}