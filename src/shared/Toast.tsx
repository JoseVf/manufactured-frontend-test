import { Notification } from 'rsuite';

type ToastType = 'info' | 'success' | 'warning' | 'error';

interface ToastProps {
  title: string;
  message: string;
  type: ToastType;
}

const Toast = ({ title, message, type }: ToastProps) => (
  <Notification type={type} header={title} closable>
    <span>{message}</span>
  </Notification>
)

export default Toast;
