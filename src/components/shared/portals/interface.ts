import { PropsWithChildren } from 'react';

export interface DefaultPortalProps extends PropsWithChildren {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    width?: number;
    visible?: boolean;
}
