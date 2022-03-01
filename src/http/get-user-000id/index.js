const arc = require('@architect/functions');

const handler = async (req, res) => {
  const { id: userId } = req.params;

  const { users } = await arc.tables();

  const user = await users.get({ id: userId });

  if (!user) {
    res({
      status: 404,
    });

    return;
  }

  res({
    status: 200,
    json: user,
    cors: true,
  });
};

exports.handler = arc.http(handler);
