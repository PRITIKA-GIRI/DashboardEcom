"use client";
import { useDeleteUser, useUpdateUser, useUsers } from '@/app/hooks/useUsers';
import { User } from '@/app/types/user.types';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { UserActions } from './_components/userActions';

const userColumns: ColumnDef<User>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "username", header: "Username" },
    {
        id: "name",
        header: "Full Name",
        cell: ({ row }) =>
            `${row.original.name.firstname} ${row.original.name.lastname}`,
    },
    {
        id: "city",
        header: "City",
        cell: ({ row }) => row.original.address.city,
    },
    { accessorKey: "phone", header: "Phone" },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => <UserActions user={row.original} />,
    },
];

export default function Users() {
    const { data = [], isLoading } = useUsers();

    const table = useReactTable({
        data,
        columns: userColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    if (isLoading) return <p>Loading...</p>;
    return (
        <div className="flex flex-col gap-[50px]">

            <div className="bg-[#273142] flex flex-col p-2 lg:p-6 gap-2 rounded-2xl">
                <p className="text-[22px] lg:text-[28px] font-semibold text-white">Users</p>
                <p className="text-[14px] font-regular text-white">View, edit, and delete users.</p>

            </div>
            <div className=' max-w-[320px] md:max-w-[450px] lg:max-w-full overflow-x-auto rounded-2xl'>
                <table className="w-full  bg-[#273142] text-white rounded-3xl">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}
                                className='rounded-4xl bg-[#4880FF]'>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className=" p-2 text-start">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className=" p-2">
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
