import React, { useRef, forwardRef, useImperativeHandle, ReactNode, MouseEvent } from 'react';
import cx from 'classnames';
import Box from '../box';
import { TextSmall } from '../typography';
import Icon from '../icon/Icon';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { COLORS, TINTS } from '../../constants';

interface PoweredByButtonProps extends Omit<BoxProps, 'className' | 'children' | 'ref'> {
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Overwrite the default label. */
  children?: ReactNode;
  /** Href when clicking the button, default is the regular commercial website. */
  href?: string;
  /** Style for the default label. */
  label?: 'text-and-logo' | 'text-only' | 'logo-only';
  /** Shape of the button. */
  shape?: 'pill' | 'box';
  /** Button tint. Light for dark backgrounds and dark for light backgrounds. */
  tint?: 'dark' | 'light';
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: (event: MouseEvent<HTMLElement>) => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: (event: MouseEvent<HTMLElement>) => void;
}

const PoweredByButton: GenericComponent<PoweredByButtonProps> = forwardRef<HTMLElement, PoweredByButtonProps>(
  (
    {
      children,
      href = 'https://www.teamleader.eu',
      tint = 'dark',
      shape = 'pill',
      label = 'text-and-logo',
      onMouseUp,
      onMouseLeave,
      className,
      ...rest
    },
    ref,
  ) => {
    const buttonRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => buttonRef.current);

    const blur = () => {
      const currentButtonRef = buttonRef.current;
      if (currentButtonRef?.blur) {
        currentButtonRef.blur();
      }
    };

    const handleMouseUp = (event: MouseEvent<HTMLElement>) => {
      blur();
      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
      blur();
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const classNames = cx(
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button'],
      theme[`button-${tint}`],
      theme[`button-${shape}`],
      className,
    );

    const iconProps: { color?: typeof COLORS[number]; tint: typeof TINTS[number] } =
      tint === 'light' ? { color: 'neutral', tint: 'lightest' } : { tint: 'darkest' };

    return (
      <Box
        element="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
        {...rest}
      >
        {shape !== 'box' && !!children && children}
        {shape !== 'box' && !children && (
          <>
            <TextSmall>Powered by&nbsp;</TextSmall>
            {label !== 'logo-only' && (
              <Icon {...iconProps}>
                <svg width="78" height="12" viewBox="0 0 78 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.8973 5.45819C47.4687 6.28094 47.5912 7.14381 47.5708 8.08696C47.5708 8.08696 47.5504 8.44816 47.5504 8.58863H42.326C42.3056 9.17057 42.5096 9.73244 42.8974 10.0736C43.1627 10.3144 43.5504 10.5351 44.0606 10.5351C44.5912 10.5351 44.9382 10.4348 45.2035 10.1739C45.3259 10.0535 45.4076 9.91304 45.4892 9.73244L46.9177 10.5552L46.9585 10.5953C46.8769 10.7358 46.7953 10.8361 46.7137 10.9365C46.0402 11.699 45.0606 12 44.0606 12C42.979 12 42.1831 11.6388 41.5709 11.0769C40.7954 10.3344 40.3668 9.29097 40.3668 8.04682C40.3668 6.84281 40.7546 5.7592 41.5096 5.01672C42.1015 4.43478 42.9382 4.05351 44.0198 4.05351C45.1831 4.05351 46.2443 4.51505 46.8973 5.45819ZM42.2647 7.28428H45.6729C45.6524 6.70234 45.4892 6.28094 45.2035 5.95987C44.9382 5.699 44.5504 5.5184 43.9994 5.5184C43.4076 5.5184 42.9382 5.7592 42.6729 6.10033C42.4076 6.44147 42.2851 6.78261 42.2647 7.28428Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7141 5.45819C14.2855 6.28094 14.408 7.14381 14.3876 8.08696C14.3876 8.08696 14.3672 8.44816 14.408 8.58863H9.14274C9.12233 9.17057 9.32641 9.73244 9.71416 10.0736C9.97946 10.3144 10.3672 10.5351 10.8774 10.5351C11.408 10.5351 11.7549 10.4348 12.0203 10.1739C12.1427 10.0535 12.2243 9.91304 12.306 9.73244L13.7345 10.5552L13.7753 10.5953C13.6937 10.7358 13.6121 10.8361 13.5304 10.9364C12.857 11.699 11.8774 12 10.8774 12C9.79579 12 8.99988 11.6388 8.38765 11.0769C7.61215 10.3344 7.18358 9.29097 7.18358 8.04682C7.18358 6.84281 7.57133 5.7592 8.32642 5.01672C8.91825 4.43478 9.75498 4.05351 10.8366 4.05351C11.9998 4.05351 13.0611 4.51505 13.7141 5.45819ZM9.10192 7.28428H12.4896C12.4896 6.70234 12.306 6.28094 12.0407 5.95987C11.7754 5.699 11.3876 5.5184 10.8366 5.5184C10.2448 5.5184 9.77538 5.7592 9.51008 6.10033C9.24478 6.44147 9.12233 6.78261 9.10192 7.28428Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M71.448 5.45819C72.0194 6.28094 72.1419 7.14381 72.1215 8.08696C72.1215 8.08696 72.1011 8.44816 72.1419 8.58863H66.8766C66.8562 9.17057 67.0603 9.73244 67.4481 10.0736C67.7134 10.3144 68.1011 10.5351 68.6113 10.5351C69.1419 10.5351 69.4888 10.4348 69.7542 10.1739C69.8766 10.0535 69.9582 9.91304 70.0399 9.73244L71.4684 10.5552L71.5092 10.5953C71.4276 10.7358 71.346 10.8361 71.2643 10.9365C70.5909 11.699 69.6113 12 68.6113 12C67.5297 12 66.7338 11.6388 66.1216 11.0769C65.3461 10.3344 64.9175 9.29097 64.9175 8.04682C64.9175 6.84281 65.3052 5.7592 66.0603 5.01672C66.6522 4.43478 67.4889 4.05351 68.5705 4.05351C69.7337 4.05351 70.795 4.51505 71.448 5.45819ZM66.8154 7.28428H70.2235C70.2235 6.70234 70.0399 6.28094 69.7542 5.95987C69.4888 5.699 69.1011 5.5184 68.5501 5.5184C67.9583 5.5184 67.4889 5.7592 67.2236 6.10033C66.9583 6.44147 66.8358 6.78261 66.8154 7.28428Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.816 10.3746V11.7191C22.5099 11.8595 22.3466 11.9197 21.8568 11.9398C21.0405 11.9398 20.5916 11.4381 20.5303 10.8763C20.163 11.4783 19.2651 12 18.1426 12C16.2651 12 15.3059 10.8763 15.3059 9.63211C15.3059 8.18729 16.4896 7.36455 17.9794 7.20401L20.2854 7.04348V6.58194C20.2854 5.8796 20.0406 5.39799 18.9589 5.39799C18.0814 5.39799 17.5712 5.77926 17.5304 6.48161H15.6937C15.7957 4.79599 17.2039 4.03344 18.9589 4.03344C20.3059 4.03344 21.4691 4.43478 21.9181 5.5786C22.1222 6.0602 22.1426 6.60201 22.1426 7.10368V9.91304C22.1426 10.2542 22.2446 10.3947 22.5711 10.3947C22.6936 10.3947 22.816 10.3746 22.816 10.3746ZM18.2651 10.5351C19.4487 10.5351 20.2854 9.93311 20.2854 8.80937V8.46823L18.2855 8.6087C17.6936 8.64883 17.1426 8.98997 17.1426 9.59197C17.1426 10.1739 17.6732 10.5351 18.2651 10.5351Z"
                    fill="currentColor"
                  />
                  <path
                    d="M35.1424 6.70234V11.8194H33.2649V7.12375C33.2649 6.20067 33.02 5.65886 32.0608 5.65886C30.9792 5.65886 30.5098 6.74248 30.5098 7.68562V11.8194H28.6323V7.12375C28.6323 6.20067 28.3874 5.65886 27.4282 5.65886C26.367 5.65886 25.8772 6.74248 25.8772 7.68562V11.8194H23.9997V4.23411H25.5711L25.7139 5.23746C26.1629 4.55518 26.918 4.05351 27.9588 4.05351C29.0812 4.05351 29.8363 4.53512 30.2241 5.29766C30.6935 4.49498 31.5302 4.05351 32.5914 4.05351C34.2648 4.05351 35.1424 5.13712 35.1424 6.70234Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.7952 10.3746V11.7191C55.4686 11.8595 55.3054 11.9197 54.8156 11.8796C53.9993 11.8796 53.5503 11.3779 53.4891 10.8161C53.1217 11.4181 52.2238 11.9398 51.1014 11.9398C49.2238 11.9398 48.2647 10.8161 48.2647 9.57191C48.2647 8.12709 49.4483 7.30435 50.9381 7.20401L53.2442 7.04348V6.58194C53.2442 5.8796 52.9993 5.39799 51.9177 5.39799C51.0401 5.39799 50.5299 5.77926 50.4891 6.48161H48.6524C48.7544 4.79599 50.1626 4.03344 51.9177 4.03344C53.2646 4.03344 54.4278 4.43478 54.8768 5.5786C55.0809 6.0602 55.1013 6.60201 55.1013 7.10368V9.91304C55.1013 10.2542 55.2237 10.3947 55.5503 10.3947C55.6727 10.3947 55.7952 10.3746 55.7952 10.3746ZM51.2442 10.5351C52.4279 10.5351 53.2646 9.93311 53.2646 8.80937V8.46823L51.2646 8.6087C50.6728 8.64883 50.1218 8.98997 50.1218 9.59197C50.1218 10.1739 50.6524 10.5351 51.2442 10.5351Z"
                    fill="currentColor"
                  />
                  <path
                    d="M77.9989 4.19398V5.9398C77.7745 5.89967 77.55 5.85953 77.3255 5.8796C75.999 5.8796 75.3051 6.78261 75.3051 8.00669V11.8194H73.4072V4.25418H75.0194L75.1826 5.39799C75.55 4.51505 76.4888 4.15385 77.4071 4.15385C77.5941 4.15385 77.7639 4.17069 77.948 4.18894C77.9648 4.19061 77.9818 4.1923 77.9989 4.19398Z"
                    fill="currentColor"
                  />
                  <path
                    d="M36.7546 1.08361L38.5709 0.0401338L38.6525 0V9.55184C38.6525 9.99331 38.7546 10.2742 39.4076 10.2742C39.5129 10.2742 39.5712 10.2677 39.621 10.262C39.6582 10.2578 39.6906 10.2542 39.7342 10.2542V11.7793C39.7021 11.7859 39.6723 11.7921 39.6444 11.798C39.3341 11.8627 39.2531 11.8796 38.8974 11.8796C37.6117 11.8796 36.7546 11.2977 36.7546 9.85284V1.08361Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M61.7747 4.75159C61.4386 4.36248 60.7136 4.07358 59.7339 4.07358C58.938 4.07358 58.3053 4.31438 57.8155 4.67559C56.8768 5.41806 56.4074 6.56187 56.4074 8.04682C56.4074 9.47157 56.8564 10.6154 57.7951 11.3378C58.2849 11.7191 58.938 11.9799 59.7135 11.9799C60.5706 11.9799 61.4481 11.6789 61.9175 10.9766L62.04 11.7993H63.6726V0L61.7747 1.08361V4.75159ZM60.0808 10.4549C61.5706 10.4549 61.8767 9.0903 61.8767 8.00669C61.8767 6.92308 61.591 5.59866 60.0808 5.5786C59.489 5.5786 59.0808 5.83947 58.8155 6.1806C58.4278 6.66221 58.3257 7.34448 58.3257 8.00669C58.3257 8.6689 58.4278 9.35117 58.8155 9.85284C59.0808 10.194 59.489 10.4549 60.0808 10.4549Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.30601 1.50502V3.25084H5.12238V11.8194H3.18363V3.25084H0V1.50502H8.30601Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            )}
            &nbsp;
            {label !== 'text-only' && (
              <Icon {...iconProps}>
                <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1784 17.6538L7.05017 9.32053H12.1784V17.6538Z" fill="currentColor" />
                  <path d="M12.1784 8.6795H-0.00109863L12.1784 0.346191V8.6795Z" fill="currentColor" />
                  <path d="M20.3146 12.5257L12.8195 17.6538L12.8195 0.346191L20.3146 12.5257Z" fill="currentColor" />
                  <path d="M19.0947 9.32053L20.8441 12.1633L24.9989 9.32053L19.0947 9.32053Z" fill="currentColor" />
                </svg>
              </Icon>
            )}
          </>
        )}
        {shape === 'box' && (
          <Icon {...iconProps}>
            <svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 27L11 14H19V27Z" fill="currentColor" />
              <path d="M19 13H0L19 0V13Z" fill="currentColor" />
              <path d="M31.6926 19L20.0002 27L20.0002 0L31.6926 19Z" fill="currentColor" />
              <path d="M29.7896 14L32.5186 18.4347L39.0001 14L29.7896 14Z" fill="currentColor" />
            </svg>
          </Icon>
        )}
      </Box>
    );
  },
);

PoweredByButton.displayName = 'PoweredByButton';

export default PoweredByButton;
