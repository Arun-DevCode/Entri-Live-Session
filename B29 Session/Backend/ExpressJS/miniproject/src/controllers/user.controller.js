import Account from "../schema/user.js";

export async function createUserAccount(req, res) {
  try {
    const newUser = await Account.insertOne(req.body);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
}

export async function getUserProfile(req, res) {
  try {
    const profile = await Account.aggregate([
      {
        $match: {
          email: {
            $eq: "varun@gmail.com",
          },
        },
      },
      {
        $project: {
          name: 1,
          email: 1,
        },
      },
      {
        $sort: {
          name: 1,
        },
      },
    ]);

    res.json({
      message: "Fetched filtered documents!",
      data: profile,
    });
  } catch (error) {
    res.json(error);
  }
}
