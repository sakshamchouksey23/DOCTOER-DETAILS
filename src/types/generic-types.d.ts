export type GenericProps<T = unknown> = {
    children?: React.ReactNode
    className?: string
} & T

export type Customer = {
    id: string;
    name: string;
    phoneNumber: string;
    createdAt: string;
    shopId: string;
}

export type Product = {
    id: string;
    shopId: string;
    name: string;
    description: string | null;
    imgUrl: string | null;
    basePrice: number;
    createdAt: string;
}

export type Shop = {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: string | null;
    createdAt: string
}