import Adapters from "next-auth/adapters"

export default class User extends  (<any>Adapters.TypeORM.Models.User.model) {
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified)
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,

    level: {
      type: 'integer',
      default: 1
    },
    currentExperience: {
      type: 'integer',
      default: 0
    },
    totalExperience: {
      type: 'integer',
      default: 0
    },
    challengesCompleted: {
      type: 'integer',
      default: 0
    },
  },
}