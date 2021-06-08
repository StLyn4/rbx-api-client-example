const createRBXClient = require('rbx-api-client');

const rbxToken = ''; /* Insert your token for authorization here */

const main = async () => {
  const RBXClient = await createRBXClient(rbxToken);

  const { userName, userID } = RBXClient;
  console.log(`Hi! I am ${userName} (ID ${userID})`);

  const { count: friendsCount } = await RBXClient.Friends['v1'].MyFriendsCount();
  const { data: onlineFriends } = await RBXClient.Friends['v1'].UsersFriendsOnline({ userId: userID });
  const { count: followersCount } = await RBXClient.Friends['v1'].UsersFollowersCount({ targetUserId: userID });
  console.log(`I have ${friendsCount} friends (${onlineFriends.length} online) and ${followersCount} followers`);
};

// run async code
main()
  .then(() => { console.log('Finished') })
  .catch(({ message }) => console.error(`RbxError: ${message}`));
