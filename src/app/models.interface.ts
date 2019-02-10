export interface Certificate {
    id: number;
    alias: string;
    entidad_emisora: string;
    num_serie: string;
    subject: string;
    caducidad: Date;
    password: string;
    id_orga: string;
    nombre_cliente: string;
    repositorio_url: string;
    contacto_renovacion: string;
    observaciones: string;
    integration_list: string;
    eliminado: boolean;
    cifrado: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: number;
}

export interface JiraUser {
    id: number;
    user_id: number;
    username: string;
    password: string;
    url: string;
    project: string;
    component: string;
    issueType: string;
    description: string;
}
