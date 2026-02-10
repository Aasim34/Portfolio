declare module 'react-responsive-masonry' {
  import { ReactNode } from 'react';

  export interface MasonryProps {
    children: ReactNode;
    gutter?: string;
  }

  export interface ResponsiveMasonryProps {
    children: ReactNode;
    columnsCountBreakPoints?: Record<number, number>;
  }

  export function ResponsiveMasonry(props: ResponsiveMasonryProps): JSX.Element;
  export default function Masonry(props: MasonryProps): JSX.Element;
}
