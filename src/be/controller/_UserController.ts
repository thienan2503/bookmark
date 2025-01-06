import { NextResponse } from "next/server";

class UserController {
  async get() {
    return NextResponse.json({ message: "Hello from the API!" });
  }
}

export default new UserController();
