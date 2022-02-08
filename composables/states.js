import { useState } from "#app";

// const user =

export const useUser = () => useState("user", async () => {});

export const useUpdateUser = (data) =>
	useState("update-user", () => (useUser().value = data));
