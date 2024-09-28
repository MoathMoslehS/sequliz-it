const { User } = require('./models'); 
// create
async function createUser(first_name, last_name) {
  try {
    const user = await User.create({ first_name, last_name });
    console.log('user created:', user.toJSON());// usless comment wasted my time
    return user;
  } catch (error) {
    console.error('Error creating user:', error);// cach err
  }
}

// read by id
async function getUserById(id) {
  try {
    const user = await User.findByPk(id); 
    if (user) {                     //tojson means fewer details or main details   
      console.log('User found:', user.toJSON());// usless comment wasted my time
    } else {
      console.log('User not found');// usless comment wasted my time
    }
    return user;
  } catch (error) {
    console.error('error finding user:', error);
  }
}

// update
async function updateUser(id, first_name) {
  try {
    const user = await getUserById(id);
    if (user) {
      user.first_name = first_name;
      await user.save();
      console.log('user Updated:', user.toJSON());// usless comment wasted my time
    }
  } catch (error) {
    console.error('error updating user:', error);
  }
}

// delete
async function deleteUserById(id) {
  try {
    const user = await getUserById(id);
    if (user) {
      await user.destroy();
      console.log(`userID ${id} deleted sucesfuly.`); // usless comment wasted my time
    } else {
      console.log(`userID ${id} not found.`);// usless comment wasted my time
    }
  } catch (error) {
    console.error('error deleting user:', error);// error catch
  }
}

module.exports = { // export to index crud functionalty
  createUser,
  getUserById,
  updateUser,
  deleteUserById,
};