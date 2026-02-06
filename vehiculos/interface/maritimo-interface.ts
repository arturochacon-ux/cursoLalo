export interface Maritimo {
  flotar(): void
  navegar(distancia: number): void
  anclar(): void
  atracar(puerto: string): void
  detectarOleaje(nivel: number): void
}