import ReactDOM from 'react-dom';
import style from './style.module.css';
import { DefaultPortalProps } from './interface';

export const Portal = ({ children, top, left, right, bottom, width, visible }: DefaultPortalProps) => {
    if (!visible) return null;
    return ReactDOM.createPortal(
        <div
            className={style.default}
            style={{
                width: width && `${width}px`,
                top: top && `${top}px`,
                left: left && `${left}px`,
                right: right && `${right}px`,
                bottom: bottom && `${bottom}px`,
            }}
        >
            {children}
        </div>,
        document.body,
    );
};
