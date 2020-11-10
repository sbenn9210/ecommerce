import SequelizeMessage from './constants/sequelize';

require('dotenv').config();

const execSync = require('child_process').execSync;

const runSequelizeCommand = async (command) => {
  try {
    execSync('sequelize ' + command + ' --debug', { stdio: 'inherit' });
  } catch (e) {
    console.log(SequelizeMessage.RunSequelizeError, e);
  }
};

const buildDb = async () => {
  await runSequelizeCommand('db:drop');
  await runSequelizeCommand('db:create');
  await runSequelizeCommand('db:migrate:undo:all');
  await runSequelizeCommand('db:migrate');
  await runSequelizeCommand('db:seed:all');

  return SequelizeMessage.MigrationSuccess;
};

buildDb();
