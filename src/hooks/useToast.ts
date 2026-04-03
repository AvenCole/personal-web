import iziToast, { type IziToastSettings } from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

type ToastOptions = {
  title?: string;
  position?: IziToastSettings['position'];
  timeout?: number;
};

function buildOptions(
  message: string,
  options?: ToastOptions,
  defaultTitle?: string,
): IziToastSettings {
  return {
    title: options?.title ?? defaultTitle,
    message,
    position: options?.position ?? 'topRight',
    timeout: options?.timeout ?? 3000,
  };
}

export function useToast() {
  return {
    info(message: string, options?: ToastOptions) {
      iziToast.info(buildOptions(message, options, 'Info'));
    },

    success(message: string, options?: ToastOptions) {
      iziToast.success(buildOptions(message, options, 'Success'));
    },

    warning(message: string, options?: ToastOptions) {
      iziToast.warning(buildOptions(message, options, 'Warning'));
    },

    error(message: string, options?: ToastOptions) {
      iziToast.error(buildOptions(message, options, 'Error'));
    },
  };
}
