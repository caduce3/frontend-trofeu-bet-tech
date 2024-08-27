import { api } from "@/lib/axios";

export interface UpdateUserProfileBody {
    id: string;
    name?: string;
    email?: string;
}

export async function updateUserProfile({ id, name, email }: UpdateUserProfileBody) {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) throw new Error('No token found');

        const response = await api.put(`/updateUser`, { id, name, email }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        console.error('Error updating user:', error);
        if (error.response) {
            throw new Error(error.response.data?.message || 'Erro ao atualizar usuário.');
        } else {
            throw new Error('Erro ao conectar com o servidor');
        }
    }
}