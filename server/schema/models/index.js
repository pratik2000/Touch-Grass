import Destination from "../../db/models/DestinationModel";
import User from "../../db/models/UserModel";

const generateDestinationModel = () => ({
    queries: {
        getAll: () =>
            new Promise(
                async (resolve, reject) =>
                    await Destination.find({}, (err, destination) =>
                        err ? reject(err) : resolve(destination))),
        getUsers: () =>
            new Promise(
                async (resolve, reject) =>
                    await User.find({}, (err, users) =>
                        err
                            ? reject(err)
                            : resolve(users))),
        getUserDestination: (id) =>
            new Promise(
                async (resolve, reject) =>
                    await Destination.find({ owner_id: id }, (err, destinations) =>
                            err ? reject(err) : resolve(destinations)
                              )),

    },
    mutations: {
        addDestination: (destination) =>
            new Promise((resolve, reject) =>
                new Destination(destination).save((err, destination) => (err ? reject(err) : resolve(destination)))),
        addUser: (user) =>
            new Promise((resolve, reject) =>
                new User(user).save((err, user) => (err ? reject(err) : resolve(user)))),
    },
});
export default generateDestinationModel;