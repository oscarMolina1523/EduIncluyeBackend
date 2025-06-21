import UserModel from "../models/UserModel";

export let userData: UserModel[];

userData = [
   new UserModel("John Doe", "jon.doe@gmail.com", "password123", true),
   new UserModel("Martha Moris", "martha.moris@gmail.com", "password123", true),
];