export type Component = 'h1' | 'h2' | 'caption' | 'span' | 'p';

export type Variant =
  | 'heading-1'
  | 'heading-2'
  | 'subtitle'
  | 'body'
  | 'caption';

export enum VariantType {
  'heading-1' = 'h1',
  'heading-2' = 'h1',
  subtitle = 'h2',
  'body' = 'p',
  'caption' = 'caption'
}
