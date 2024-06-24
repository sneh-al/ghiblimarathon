import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

/**
 * Retrieves the authenticated user and checks if they exist in the database.
 * If the user does not exist, they are added to the database.
 * Redirects the user to their profile page or the home page based on the result.
 *
 * @param {Request} request - The HTTP request object.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object.
 */
export async function GET(request: Request) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
  const user = await getUser();
  if (!user) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  try {
    const isUserExist = await prisma.user.findUnique({
      where: {
        kindeId: user.id,
      },
    });

    if (!isUserExist) {
      const userinDb = await prisma.user.create({
        data: {
          kindeId: user.id,
          email: user.email || " ",
          name: user.given_name + " " + user.family_name || "'",
          imageUrl: user.picture,
        },
      });
    }

    return NextResponse.redirect(new URL(`/${user.id}`, request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL(`/`, request.url));
  }
}
