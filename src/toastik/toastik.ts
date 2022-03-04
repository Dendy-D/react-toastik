import toastStore from './stores/toastStore';
import { uniqueId } from './utils/generateID';

const toastik = (message?: string) => {
  toastStore.addToast(uniqueId('toast'), message ? message : '');
};

export default toastik;
