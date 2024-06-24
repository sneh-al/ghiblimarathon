"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const setStatus = async (ids, formData) => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const isAuth = await isAuthenticated();
  if (!isAuth) {
    return redirect("/login");
  }
  const user = await getUser();
  const userInDb = await prisma.user.findUnique({
    where: {
      kindeId: user?.id,
    },
  });

  const { movieId, statusId } = ids;

  const status = formData.get("status");
  try {
    if (statusId) {
      const statusInDbUpdate = await prisma.status.update({
        where: {
          id: statusId,
        },
        data: {
          status,
        },
      });
      return;
    }
    const statusInDb = await prisma.status.create({
      data: {
        movieId,
        userId: userInDb?.id,
        status,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    redirect(`/${user?.id}`);
  }
};
