export interface Cardapio {
  pizzas: Pizza[],
  sabores: Sabor[]
}

export interface Pizza {
  name: string,
  sabores: string[]
}

export type Sabor = string;