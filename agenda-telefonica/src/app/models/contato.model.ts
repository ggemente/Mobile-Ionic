import { Guid } from 'guid-typescript'

export interface Contato {
    id: Guid
    nome: string
    sobrenome: string
    numero: string
    tipo: string
    email: string
}