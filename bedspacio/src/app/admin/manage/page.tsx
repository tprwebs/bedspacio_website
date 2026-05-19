"use server"

import { redirect } from "next/navigation";
import { getAllUsers, getCurrentUser } from "../../../../lib/user"
import Manage from "./Manage";
import { ManageType} from "./Manage";

export default async function PageWrapper () {

    const users = await getAllUsers();
    console.log('All users: ', users);

    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect("/login");
    }

    if (currentUser.role !== 'admin') {
        redirect('/admin/unauthorized');
    }

    

    return <Manage users={users} />
}