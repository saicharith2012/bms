"use server";
import { client } from "@repo/db/client";

export interface FetchUserResponse {
  message: string;
  user: {
    id: string;
    username: string;
    password: string;
  };
}

export interface ActionError {
  message: string;
}

export async function fetchUser(): Promise<FetchUserResponse | ActionError> {
  try {
    const user = await client.user.findFirst({
      orderBy: {
        createdAt: "desc"
      }
    });

    if (!user) {
      throw new Error("No user found.");
    }

    return { message: "fetched user successfully", user };
  } catch (error) {
    return {
      message:
        error instanceof Error
          ? error.message
          : "Error while fetching the user.",
    };
  }
}
