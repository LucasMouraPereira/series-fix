/* eslint-disable @typescript-eslint/no-explicit-any */
import style from './style.module.css'

type RoundButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: (() => void) | any
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const RoundButton = ({
  children,
  disabled = false,
  onClick,
  type = 'button',
}: RoundButtonProps) =>
  type !== 'submit' ? (
    <button
      className={style.wrapperRoundButton}
      disabled={disabled}
      type={type}
      onClick={() => onClick && onClick()}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      {children}
    </button>
  ) : (
    <button
      className={style.wrapperRoundButton}
      disabled={disabled}
      type={type}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      {children}
    </button>
  )
