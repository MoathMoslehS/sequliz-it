const { sequelize } = require('./models');
const { createUser, getUserById, updateUser, deleteUserById } = require('./crud');

sequelize.sync({ alter: true }) //force will make the database be deleted thats why we use alter
  .then(async () => {

    // create
    //await createUser('Khalid', 'alharbi');

    // reading
    // await getUserById(4);

    // updating
    // await updateUser(1, 'Moath');

    // delete by pr key= id 
    // await deleteUserById(1);

  })
  .catch((err) => {
    console.error('SYNC FAILED:', err);
  });