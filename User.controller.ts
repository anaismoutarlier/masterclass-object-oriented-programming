type User = {
  id: number;
  name: string;
};
class UserModel {
  private users: User[];
  private currentId: number;
  constructor() {
    this.currentId = 1;
    this.users = [];
  }

  create(name: string) {
    const user = { id: this.currentId++, name };
    this.users.push(user);
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  deleteOne(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index >= 0) {
      const deletedUser = this.users.splice(index, 1);
      return deletedUser.length > 0;
    }
    return false;
  }

  find() {
    return this.users;
  }
}

class UserController {
  constructor(private userModel: UserModel) {}

  register(name: string) {
    // regex verification
    const newUser = this.userModel.create(name);
  }

  deleteAccount(id: number) {
    const deletedUser = this.userModel.deleteOne(id);
    return deletedUser;
  }

  findAll() {
    return this.userModel.find();
  }
}

const usersController = new UserController(new UserModel());
usersController.register("Anais");
usersController.register("Patrice");
console.log(usersController.findAll());
