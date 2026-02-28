"use client";

import { User } from "@/app/types/user.types";
import { Button } from "@/components/ui/button";
import { FiEdit } from "react-icons/fi";
import { FaTrash } from "react-icons/fa6";
import { useDeleteUser, useUpdateUser } from "@/app/hooks/useUsers";

interface Props {
    user: User;
}

export function UserActions({ user }: Props) {
    const { mutate: deleteUser, isPending: isDeleting } =
        useDeleteUser();
    const { mutate: updateUser, isPending: isUpdating } =
        useUpdateUser();

    return (
        <div className="flex gap-2">
            <Button
                size="sm"
                onClick={() =>
                    updateUser({
                        id: user.id,
                        data: { phone: "111-111-1111" },
                    })
                }
                disabled={isUpdating}
            >
                <FiEdit />
            </Button>

            <Button
                size="sm"
                className="text-red-600"
                onClick={() => deleteUser(user.id)}
                disabled={isDeleting}
            >
                <FaTrash />
            </Button>
        </div>
    );
}