import UserController from "@/be/controller/_UserController";

export async function GET() {
  return UserController.get();
}
