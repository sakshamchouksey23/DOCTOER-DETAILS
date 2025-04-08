// Order status type
export type OrderStatus = 'PENDING' | 'COMPLETED' | 'DELIVERED' | 'CANCELLED';

// Badge variant type
export type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info";

// Customer type
export interface Customer {
    id: string;
    name: string;
    phoneNumber: string;
    shopId: string;
    createdAt: string;
}

// Product type
export interface Product {
    id: string;
    name: string;
    description: string | null;
    imgUrl: string | null;
    basePrice: number;
    shopId: string;
    createdAt: string;
}

// Product with agreed price
export interface ProductWithAgreedPrice extends Product {
    agreedPrice: number;
}

// Order product type
export interface OrderProduct {
    id: string;
    orderId: string;
    productId: string;
    agreedPrice: number;
    product: Product;
}

// Order type
export interface Order {
    id: string;
    shopId: string;
    customerId: string;
    totalProducts: number;
    totalPrice: number;
    advancePayment: number;
    additionalCost: number;
    status: OrderStatus;
    createdAt: string;
    expectedDelivery: string;
}

export interface OrderWithProducts extends Order {
    orderProducts: OrderProduct[]
}

// Standard API response type
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

// Order form values
export interface OrderFormValues {
    customerId: string;
    totalProducts: number;
    totalPrice: number;
    advancePayment: number;
    additionalCost: number;
    expectedDelivery: Date;
    status?: OrderStatus;
    products: ProductWithAgreedPrice[];
} 